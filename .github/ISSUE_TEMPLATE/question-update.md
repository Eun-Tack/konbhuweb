---
name: 인터뷰 질문 개선
about: Phase 1 인터뷰 질문 개선 제안
labels: question-update
assignees: ''
---

## 개선 제안 요약

| 항목 | 값 |
|------|---|
| 개선 대상 에이전트 | interviewer / ba-writer |
| 현재 버전 | v{N.N} |
| 발견 계기 | Phase {N} 결함 / Postmortem / 직접 발견 |
| 관련 KPI | T1-01 / T4-04 / O-I-02 등 |

---

## 관찰된 문제

**어떤 질문이 빠지거나 부족했는가?**

> (구체적인 예시: "동시성 관련 edge case 질문이 없어서 Phase 5에서 N개의 BA 결함이 발생")

**발생 빈도**:
- [ ] 이번 프로젝트 1회
- [ ] N번 이상 반복 (프로젝트: {목록})

**관련 BA 결함 이슈**: #{번호}

---

## 현재 질문 (있는 경우)

```
현재 지시문의 해당 부분:
(framework/agents/interviewer/v{버전}.md 섹션 {N})

{현재 질문 내용}
```

---

## 개선 제안

**추가할 질문**:
```
{새로운 질문 내용}
```

**수정할 질문** (있는 경우):
```
현재: {현재 질문}
개선: {개선된 질문}
```

**추가 위치**:
- Phase {N}: {단계명} 섹션에 추가

---

## 기대 효과

이 질문이 추가되면:

| KPI | 현재 실측 | 기대 개선 |
|-----|---------|---------|
| T4-04 (Edge Case 밀도) | {현재} | {기대} |
| O-I-02 (BA 결함률) | {현재} | {기대} |

---

## 체크리스트

- [ ] `framework/agents/interviewer/v{새버전}.md` 업데이트
- [ ] `framework/agents/interviewer/current.md` 업데이트
- [ ] `CHANGELOG.md` 업데이트
- [ ] 관련 템플릿 (`framework/templates/phase1_interview/`) 업데이트 필요 여부 확인
