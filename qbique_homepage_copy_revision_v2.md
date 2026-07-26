# Qbique 홈페이지 문구 수정안 v2 (IR 기준 정합)

## 작성 기준 (확정된 방향)

1. **성과 수치 비노출** — 공개 마케팅 사이트 = 투자광고 규제 대상. CAGR 22.1%·Sharpe 1.02 등 수치는 넣지 않음. 대신 "장기 실증·검증된" 정성 신뢰 언어만 사용.
2. **B2B 기관 중심 전환** — 고객군을 IR p12(중소형/대형 기관·데이터 생태계)에 맞춤. 개인투자자 단독 세그먼트 제거. 단 Hero 태그라인은 IR 표지와 동일하게 포용형("모든 투자자에게") 유지.
3. **문구만 수정** — 섹션·카드 수·data-i18n 키 불변. 텍스트 값만 교체.
4. **양자 축소** — IR은 양자를 후순위 add-on(p9)으로 취급. Technology 정면 카드·Pricing 독립 티어에서 제거하고 Roadmap(진화 경로)에만 잔류.

## 적용 대상 파일 (3곳 동기)

- `index.html` — ko 하드코딩 (SEO/fallback)
- `en/index.html` — en 하드코딩
- `script.js` — `i18n.ko` / `i18n.en` 딕셔너리 (런타임 실제 렌더 소스)

세 파일의 같은 키는 **동일 텍스트로 동기화**해야 함.

---

## 섹션 1 — Hero

| 키 | 현행 | 수정안 |
|---|---|---|
| heroTitle (ko) | 기관의 역량을, / 모든 투자자에게 | **유지** (IR 표지 태그라인과 동일) |
| heroTagline (ko) | 지표를 보여주는 것과 투자를 돕는 것은 다릅니다 | **유지** |
| heroSubtitle (ko) | 기존 시스템은 시장 데이터 분석 도구를 제공할 뿐이고, ETF와 같은 상품은 누군가의 판단을 따르게 합니다. Qbique는 그 사이에서 시장의 리스크 구조를 가공하여 투자자가 **직접** 최적화된 포트폴리오에 체계적으로 도달할 수 있는 경로를 제공합니다. | 기존 시스템은 시장 데이터 분석 도구를 제공하는 데 그치고, ETF와 같은 상품은 획일적인 판단을 따르게 합니다. Qbique는 시장의 리스크 구조를 가공하여, **투자자의 성향에 맞춘** 최적 포트폴리오에 체계적으로 도달하는 경로를 제공합니다. |

> 변경 이유: "투자자가 직접"(B2C 셀프서비스 뉘앙스) → "성향에 맞춘"(IR 핵심 = 맞춤성). 기관이 계좌별로 운용하는 맥락과 정합.

**EN**
| 키 | 수정안 |
|---|---|
| heroSubtitle | Existing systems merely provide market data analysis tools, while products like ETFs impose a one-size-fits-all judgment. Qbique processes market risk structures to deliver a systematic path to optimized portfolios **tailored to each investor's profile**. |

---

## 섹션 2 — Problem (프레이밍 전면 교체)

현행 축 = "트레이딩 도구 vs 패시브 ETF 간극"(개인 트레이더 시점).
수정 축 = IR p2 매트릭스 = "검증된 성과 + 맞춤 운용의 동시 부재"(기관 시점).

| 키 | 현행 | 수정안 |
|---|---|---|
| problemTitle (ko) | 투자는 대중화되었지만, 도구는 여전히 트레이딩에 머물러 있습니다 | 검증된 성과와 맞춤 운용을, 동시에 제공하는 해법은 없었습니다 |
| problemBody1 (ko) | 개인 투자자에게도 분석 도구는 제공됩니다. 그러나 대부분은 개별 종목 중심 분석과 트레이딩 전략 구현에 치중되어 … 단기 매매로 지속적인 우위를 확보하기는 더욱 어렵습니다. | 지수 추종 ETF와 인덱스 펀드는 단순하지만 규제 제약 안에서 획일적이고, 퇴직연금·변액보험은 보수적으로 운용되어 성과가 낮습니다. 반대편의 단기 매매 도구와 기관용 퀀트 플랫폼은 맞춤 운용이 가능하지만, 진입 장벽이 높아 소수만 접근할 수 있습니다. |
| problemBody2 (ko) | 이를 인식한 투자자들은 ETF와 같은 상품으로 향하지만, 그 순간 투자는 완전히 수동적인 활동이 됩니다. … 사실상 부재합니다. | 결국 투자자 성향을 맞춤 반영하면서 검증된 성과를 안정적으로 이어가는 방법을, 누구나 쉽게 누릴 수 있는 선택지는 사실상 부재합니다. |
| problemClosing (ko) | Qbique는 직관적인 사용성을 바탕으로 이 간극을 채웁니다. | Qbique는 직관적인 사용성으로 이 공백을 채웁니다. |

**EN**
| 키 | 수정안 |
|---|---|
| problemTitle | A solution that pairs proven performance with tailored management has been missing |
| problemBody1 | Index ETFs and index funds are simple but uniform, bound by tight regulatory limits. Pensions and variable insurance run conservatively and underperform. On the other side, short-term trading tools and institutional quant platforms allow tailored management but sit behind high entry barriers accessible only to a few. |
| problemBody2 | The result: virtually no option lets anyone easily and steadily access a method that reflects individual risk preferences while sustaining proven performance. |
| problemClosing | Qbique fills this gap with intuitive usability. |

---

## 섹션 3 — Solution (기술선도 → 검증된 성과)

value 카드 4개 유지. card3만 교체(기술선도가 IR "견고한 성과 지향"을 밀어냄 → 성과축 복원, 양자·ML 강조 제거).

| 키 | 현행 | 수정안 |
|---|---|---|
| solutionLead (ko) | 금융 포트폴리오 운용의 전 과정을 하나의 플랫폼에서 관리할 수 있는 환경을 제공합니다. | 광범위한 자산군에서 최적 포트폴리오를 산출하고, 운용의 전 과정을 하나의 플랫폼에서 관리합니다. |
| value3Title (ko) | 기술 선도 | 검증된 성과 지향 |
| value3Body (ko) | 양자 컴퓨팅과 머신러닝을 활용한 지속적 성능 개선 | 장기 실증을 거친 운용 로직으로 벤치마크를 넘어서는 성과를 추구 |

> value1(통합성)·value2(유연성)·value4(사용 편의성)은 유지.
> 참고: value3 아이콘 🚀 → 📈 교체 권장(HTML `value-icon`, i18n 아님).

**EN**
| 키 | 수정안 |
|---|---|
| solutionLead | We generate optimal portfolios across a broad asset universe and manage the entire operation in one platform. |
| value3Title | Proven Performance |
| value3Body | Operating logic validated over decades of out-of-sample testing, built to pursue returns beyond the benchmark. |

---

## 섹션 4 — Features (양자 격하 + 계좌별 최적화 반영)

feature 4개 유지. feature2Body에서 "양자 컴퓨팅" 핵심 서술 제거, IR 차별점(계좌별 최적화·클러스터링)·ML로 대체.

| 키 | 현행 | 수정안 |
|---|---|---|
| feature2Body (ko) | 대규모 자산군에서도 효율적으로 작동하는 최적화 알고리즘을 제공합니다. **양자 컴퓨팅을 활용한 탐색 범위 확장 옵션**과 머신러닝 기반 수익률 전망 모델을 통합하여 더 나은 의사결정을 지원합니다. | 대규모 자산군에서도 효율적으로 작동하는 클러스터링 기반 최적화 엔진을 제공합니다. 보유 종목·위험 성향 등 계좌 단위 제약을 반영하여 단일 모델을 복제하지 않고 계좌별 최적해를 산출하며, 머신러닝 기반 수익률 전망을 통합합니다. |

> feature1(유연한 전략 구현)·feature3(문제 정의·리포팅)·feature4(ChatOps)는 유지 — IR p4/A1과 정합.

**EN**
| 키 | 수정안 |
|---|---|
| feature2Body | A clustering-based optimization engine that scales to large asset universes. It reflects per-account constraints such as holdings and risk profile to produce a distinct optimum for each account—not one model copied across all—and integrates ML-based return forecasts. |

---

## 섹션 5 — Technology (양자 카드 → 적응성 카드)

tech 카드 3개 유지. card2(양자-고전 하이브리드) → Adaptivity(Markov 국면전환 + Black-Litterman). 양자는 Roadmap으로만 이동.

| 키 | 현행 | 수정안 |
|---|---|---|
| techKeyword2 (ko) | 고품질 | 적응성 |
| tech2Title (ko) | 양자-고전 하이브리드 최적화 | 국면 전환 감지 · 적응형 자산배분 |
| tech2Body (ko) | 고전 알고리즘으로 1차 최적화를 수행한 후, 양자 어닐링을 통해 더 넓은 탐색 공간에서 개선된 해를 탐색합니다. 현재 상용화된 양자 컴퓨팅 기술을 실용적으로 활용합니다. | Markov switching 기반으로 시장 국면 전환을 감지하고, Black-Litterman 모형으로 시장 전망과 균형 수익률을 결합하여 자산을 배분합니다. 국면 변화에 적응하는 운용을 지향합니다. |

> tech1(휴리스틱+임베디드 = IR Efficiency)·tech3(ML 수익률 전망)은 유지.
> **Roadmap 유지** — phase2(하이브리드 양자 어닐링)·phase3(FTQC 회로 기반)는 그대로. IR p9 "진화 경로/add-on" 포지션과 정합. 양자는 여기서만 노출.

**EN**
| 키 | 수정안 |
|---|---|
| techKeyword2 | Adaptivity |
| tech2Title | Regime Detection · Adaptive Allocation |
| tech2Body | Markov-switching detects market regime shifts, and a Black-Litterman model combines market views with equilibrium returns for allocation—management that adapts as regimes change. |

---

## 섹션 6 — Needs / 고객별 가치 (B2C → B2B 전면 재정의)

카드 3개 유지. IR p12(중소형 기관·대형 기관·데이터 생태계)로 대상 교체. 개인투자자 세그먼트 제거.

| 키 | 현행 | 수정안 |
|---|---|---|
| needs1Title (ko) | 👤 개인 투자자 / 기관 관리자 | 🏢 중소형 기관 |
| needs1Body (ko) | 기관 수준의 포트폴리오 최적화를 직관적으로 제공. 전문 지식 없이도 기관 수준 분석에 접근 가능 | 자체 퀀트 인프라 없이 고급 포트폴리오 운용 엔진을 즉시 활용. 낮은 초기 비용으로 전략 수립·백테스트·리밸런싱을 하나의 워크플로로 통합 |
| needs2Title (ko) | 🏛️ 기관 투자자 / 개인 전문가 | 🏛️ 대형 기관 |
| needs2Body (ko) | 신규 전략 구현 및 포괄적 백테스트 수행. 규제 반영 다중 제약 최적화, 기존 시스템과의 API 통합, 감사 추적이 가능한 운용 프로세스 | 액티브 운용 영역으로 확대. 규제 반영 다중 제약 최적화와 API 통합으로 본사 직접·ISA·연금 일임 계좌를 효율적으로 운용하며, 감사 추적이 가능한 운용 프로세스 |
| needs3Title (ko) | 🔗 데이터 / 기술 파트너 | 🔗 데이터 · 기술 생태계 |
| needs3Body (ko) | 자사 데이터·기술의 부가가치화, 공동 서비스 개발을 통한 생태계 기반 협업 | 시장 데이터를 플랫폼 내 부가가치로 전환하고, AI·인프라 기술 파트너와 상호 성장하는 생태계 기반 협업 |

> needs1 아이콘 👤 → 🏢 교체(HTML 내 이모지).
> needsLead("각 고객군에게 Qbique가 제공하는 핵심 가치") 유지.

**EN**
| 키 | 수정안 |
|---|---|
| needs1Title | 🏢 Small & Mid-size Institutions |
| needs1Body | Access an advanced portfolio engine with no in-house quant infrastructure. Low upfront cost, with strategy design, backtesting, and rebalancing unified in one workflow. |
| needs2Title | 🏛️ Large Institutions |
| needs2Body | Expand into active management. Regulation-aware multi-constraint optimization and API integration to run head-office, ISA, and pension discretionary accounts efficiently, with auditable processes. |
| needs3Title | 🔗 Data & Technology Ecosystem |
| needs3Body | Turn market data into platform value and grow together with AI and infrastructure partners through ecosystem-based collaboration. |

---

## 섹션 7 — Pricing (양자 티어 → 기관 도입형)

카드 3개 유지. card3(양자 컴퓨팅 옵션) → IR p14 사용료 트랙(온프렘/클라우드) = 현 사업 단계(Phase 0 SaaS)와 정합.

| 키 | 현행 | 수정안 |
|---|---|---|
| pricing3Title (ko) | 양자 컴퓨팅 옵션 | 기관 도입형 (온프레미스 · API) |
| pricing3F1 (ko) | 하이브리드 양자 어닐링 최적화 | 온프레미스 — 고객사 인프라 내 설치·운용 |
| pricing3F2 (ko) | 확장된 탐색 공간에서 개선된 최적해 | 클라우드 API 호스팅 — 개별 설치 없이 다수 계좌 서비스 |
| pricing3F3 (ko) | 사용량 기반 추가 과금 | 계좌 수 기반 라이선스 |

> pricing1(플랫폼 기본 구독)·pricing2(프리미엄 모델 구독)는 유지.
> **판단 필요(A):** 양자를 Pricing에서 완전 제거하는 안. 대안 = card3을 IR p14 "성과 연동형(자문·일임)"으로 채우는 것도 가능하나, 자문·일임은 IR 로드맵상 Phase 1+ (미인가 단계)라 현시점 과대 표현 우려 → 현 단계에 맞는 "기관 도입형"을 채택. 검토 요망.

**EN**
| 키 | 수정안 |
|---|---|
| pricing3Title | Institutional Deployment (On-prem · API) |
| pricing3F1 | On-premises — installed and run within client infrastructure |
| pricing3F2 | Cloud API hosting — serve many accounts without separate installs |
| pricing3F3 | Account-based licensing |

---

## 섹션 8 — Meta / SEO (index.html head)

| 위치 | 현행 | 수정안 |
|---|---|---|
| `<meta name="description">` (ko) | 기관의 역량을 모든 투자자에게. 시장의 리스크 구조를 가공하여 투자자가 직접 최적화된 포트폴리오에 체계적으로 도달할 수 있는 경로를 제공합니다. | 전문가 수준의 투자를 누구나 쉽게. 검증된 운용 로직과 계좌별 최적화로 기관의 포트폴리오 운용 전 과정을 하나의 플랫폼에서 제공합니다. |
| `<meta property="og:description">` (ko) | 금융기관을 위한 통합 포트폴리오 최적화 플랫폼 | 유지 |

---

## 변경하지 않는 것 (명시)

- 섹션 순서·개수, data-i18n 키, 카드 개수, 폼/컨택트, 푸터, 네비 메뉴 라벨.
- Roadmap 3단계(양자 잔류) — IR "진화 경로" 포지션과 정합하므로 유지.
- Hero 헤드라인·태그라인 — IR 표지와 동일.

## 후속 판단 필요 목록

- **(A) Pricing card3** — "기관 도입형" 채택안 확인(위 섹션 7).
- **(B) 아이콘 교체** — value3 🚀→📈, needs1 👤→🏢 (HTML 내 이모지, i18n 아님).
- **(C) 반영 방식** — 이 문서 승인 후 3파일(index.html·en·script.js) 일괄 편집할지.
</content>
</invoke>
