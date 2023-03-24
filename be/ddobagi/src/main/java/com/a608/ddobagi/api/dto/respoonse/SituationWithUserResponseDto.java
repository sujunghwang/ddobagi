package com.a608.ddobagi.api.dto.respoonse;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class SituationWithUserResponseDto {
    Long completedScriptCnt;
    Long totalScriptCnt;
    Long completedQuizCnt;
    Long totalQuizCnt;
    @JsonProperty("isCompleted")
    Boolean isCompleted;
//    Double progress;

    @Builder
    public SituationWithUserResponseDto(Long completedScriptCnt, Long totalScriptCnt, Long completedQuizCnt, Long totalQuizCnt, Boolean isCompleted) {
        this.completedScriptCnt = completedScriptCnt;
        this.totalScriptCnt = totalScriptCnt;
        this.completedQuizCnt = completedQuizCnt;
        this.totalQuizCnt = totalQuizCnt;
        this.isCompleted = isCompleted;
//        this.progress = progress;
    }
}
