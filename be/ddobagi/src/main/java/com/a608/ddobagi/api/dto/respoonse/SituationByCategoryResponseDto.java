package com.a608.ddobagi.api.dto.respoonse;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class SituationByCategoryResponseDto {

    Long situationId;
    String thumbnail;
    @JsonProperty("isCompleted")
    Long isCompleted;
    Double progress;
    String lang;
    String title;

    @Builder

    public SituationByCategoryResponseDto(Long situationId, String thumbnail, Long isCompleted, Double progress, String lang, String title) {
        this.situationId = situationId;
        this.thumbnail = thumbnail;
        this.isCompleted = isCompleted;
        this.progress = progress;
        this.lang = lang;
        this.title = title;
    }
}
