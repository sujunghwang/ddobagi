package com.a608.ddobagi.api.dto.respoonse.learning;

import com.a608.ddobagi.db.entity.Lang;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@ToString
@Data
@RequiredArgsConstructor
public class SituationContentByCategoryQueryDto {

    Long situationId;
    String thumbnail;
    Lang lang;
    String title;
    Long completedScriptCnt;
    Long totalScriptCnt;
    Long completedQuizCnt;
    Long totalQuizCnt;
    @JsonProperty("isCompleted")
    boolean isCompleted;
    double progress;

    @Builder
    public SituationContentByCategoryQueryDto(Long situationId, String thumbnail, Lang lang, String title, Long completedScriptCnt, Long totalScriptCnt, Long completedQuizCnt, Long totalQuizCnt, boolean isCompleted, double progress) {
        this.situationId = situationId;
        this.completedScriptCnt = completedScriptCnt;
        this.thumbnail = thumbnail;
        this.lang = lang;
        this.title = title;
        this.totalScriptCnt = totalScriptCnt;
        this.completedQuizCnt = completedQuizCnt;
        this.totalQuizCnt = totalQuizCnt;
        this.isCompleted = isCompleted;
        this.progress = progress;
    }
}
