---
name: 버그 리포트
about: 개발/QA 중 발견된 버그
labels: bug
assignees: ''
---

## 버그 요약

**제목**: {한 줄 설명}

**심각도**:
- [ ] P0 (Critical — 서비스 중단)
- [ ] P1 (High — 핵심 기능 장애)
- [ ] P2 (Medium — 기능 일부 장애)
- [ ] P3 (Low — 경미한 문제)

**발견 Phase**: Phase 5 리뷰 / Phase 4 구현 중 / Phase 3 설계 검토

---

## defect-origin 분류 (필수)

- [ ] **BA 결함** (`ba-defect`): BA PRD가 모호하거나 이 케이스를 정의하지 않음
- [ ] **설계 결함** (`design-defect`): BA PRD는 명확했으나 Tech Spec이 잘못 설계됨
- [ ] **구현 결함** (`implementation-defect`): Tech Spec도 명확했으나 코드가 잘못 구현됨
- [ ] **회귀 결함** (`regression`): 이전에 동작하던 기능이 이번 변경으로 깨짐

**분류 근거**:
> (왜 이 분류인지 구체적으로 설명. BA PRD 또는 Tech Spec 관련 위치 명시)

---

## 영향받는 기능

- FR ID: `FR-{모듈}-{번호}`
- AC ID: `AC-{FR ID}-{N}`
- 관련 PR: #{번호}

---

## 재현 방법

```
환경: dev / staging

전제 조건:
1.

재현 단계:
1.
2.
3.
```

## 기대 결과 (BA AC 기준)

```
AC 시나리오: {시나리오명}
Given: {초기 상태}
When: {행동}
Then: {기대 결과}  ← 이렇게 되어야 함
```

## 실제 결과

> (실제로 어떻게 동작했는가)

---

## 프레임워크 개선 필요

- [ ] 이 버그 패턴이 에이전트 지시문 개선으로 예방 가능함
- 개선 제안: {내용}
- 관련 이슈 레이블: `agent-improvement` / `question-update` / `design-review`
