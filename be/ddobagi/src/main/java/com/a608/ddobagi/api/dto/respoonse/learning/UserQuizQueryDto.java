package com.a608.ddobagi.api.dto.respoonse.learning;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@ToString
@Data
@RequiredArgsConstructor
public class UserQuizQueryDto {
    Long situationId;
    Long completedQuizCnt;
    Long totalQuizCnt;

    @Builder
    public UserQuizQueryDto(Long situationId, Long completedQuizCnt, Long totalQuizCnt) {
        this.situationId = situationId;
        this.completedQuizCnt = completedQuizCnt;
        this.totalQuizCnt = totalQuizCnt;
    }
}
