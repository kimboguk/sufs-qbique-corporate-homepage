import { EmailMessage } from "cloudflare:email";

const ALLOWED_ORIGINS = [
  'https://qbique.co.kr',
  'https://www.qbique.co.kr',
  'https://kimboguk.github.io',
];

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(body, status, request) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(request) },
  });
}

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

function encodeMimeWord(text) {
  return `=?UTF-8?B?${utf8ToBase64(text)}?=`;
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(request) });
    }

    const url = new URL(request.url);

    if (url.pathname === '/submit' && request.method === 'POST') {
      return handleSubmit(request, env);
    }

    return jsonResponse({ error: 'Not found' }, 404, request);
  },
};

async function handleSubmit(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400, request);
  }

  const { name, company, email, phone, message, honeypot } = body;

  // Honeypot check — if filled, silently accept (bot trap)
  if (honeypot) {
    return jsonResponse({ success: true }, 200, request);
  }

  // Required field validation
  if (!name || !email || !message) {
    return jsonResponse({ error: 'Missing required fields: name, email, message' }, 400, request);
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ error: 'Invalid email format' }, 400, request);
  }

  // Build email content
  const emailBody = [
    `성함 / Name: ${name}`,
    `소속 / Company: ${company || '-'}`,
    `이메일 / Email: ${email}`,
    `연락처 / Phone: ${phone || '-'}`,
    '',
    '문의 내용 / Message:',
    message,
  ].join('\r\n');

  const subject = `[Qbique 문의] ${name} - ${company || '개인'}`;
  const fromName = `Qbique 문의 (${name})`;
  const fromAddr = 'noreply@qbique.co.kr';
  const envelopeTo = 'kim.boguk@gmail.com';

  // Build raw MIME message
  const rawEmail = [
    `MIME-Version: 1.0`,
    `From: ${encodeMimeWord(fromName)} <${fromAddr}>`,
    `Reply-To: ${encodeMimeWord(name)} <${email}>`,
    `To: Qbique <contact@qbique.co.kr>`,
    `Subject: ${encodeMimeWord(subject)}`,
    `Content-Type: text/plain; charset=utf-8`,
    `Content-Transfer-Encoding: base64`,
    ``,
    utf8ToBase64(emailBody),
  ].join('\r\n');

  try {
    const msg = new EmailMessage(fromAddr, envelopeTo, rawEmail);
    await env.EMAIL.send(msg);
    return jsonResponse({ success: true }, 200, request);
  } catch (err) {
    console.error('Email send error:', err);
    return jsonResponse({ error: 'Failed to send email' }, 500, request);
  }
}
