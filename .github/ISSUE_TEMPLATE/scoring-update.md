---
name: Readiness Score 재조정
about: BA/Design Readiness Score 계산 방식 조정
labels: scoring-update
assignees: ''
---

## 조정 대상

| 항목 | 값 |
|------|---|
| 대상 Score | BA Readiness Score / Design Readiness Score |
| 현재 버전 | v{N.N} |
| 조정 유형 | 배점 변경 / 항목 추가 / 항목 제거 / 합격 기준 변경 |

---

## 현재 배점 구조 (문제 항목)

| 항목 | 현재 배점 | 문제점 |
|------|---------|--------|
| {항목} | {N}점 | {문제점} |

---

## 관찰된 문제

**현재 Score 계산이 왜 문제인가?**

> (예: "Edge Case 항목 배점이 너무 낮아서 Edge Case 없이도 80점을 달성할 수 있음")

**데이터 근거**:
- 프로젝트 {N}: Score {N}점 달성 + 하지만 Phase 5에서 BA 결함 {N}건 발생

---

## 제안 변경

| 항목 | 현재 배점 | 제안 배점 | 변경 이유 |
|------|---------|---------|---------|
| {항목} | {N}점 | {N}점 | {이유} |

**합격 기준 변경** (해당 시):
- 현재: ≥ {N}점
- 제안: ≥ {N}점

---

## 기대 효과

이 변경이 실제 품질 게이트로서의 역할을 어떻게 강화하는가:
> (예: "Edge Case 항목 가중치를 높여서 Edge Case 미흡 시 80점 달성 불가능하게 함")

---

## 업데이트 필요 파일

- [ ] `framework/agents/{에이전트}/v{새버전}.md` — Score 배점 표 수정
- [ ] `framework/agents/{에이전트}/current.md` — 버전 포인터 업데이트
- [ ] `CHANGELOG.md` — 변경 기록
