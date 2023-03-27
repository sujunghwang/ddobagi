package com.a608.ddobagi.api.dto.respoonse.learning;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@RequiredArgsConstructor
public class SituationContentByCategoryResponseDto {
    Long situationId;
    String thumbnail;
    @JsonProperty("isCompleted")
    boolean isCompleted;
    double progress;
    List<SituationTransDto> situationTransList;

    @Builder
    public SituationContentByCategoryResponseDto(Long situationId, String thumbnail, boolean isCompleted, double progress, List<SituationTransDto> situationTransList) {
        this.situationId = situationId;
        this.thumbnail = thumbnail;
        this.isCompleted = isCompleted;
        this.progress = progress;
        this.situationTransList = situationTransList;
    }

//    Long situationId;
//    String thumbnail;
//    @JsonProperty("isCompleted")
//    boolean isCompleted;
//    double progress;
//    List<SituationTransDto> situationTransList;
//
//    @Builder
//    public SituationContentByCategoryResponseDto(Long situationId, String thumbnail, boolean isCompleted, double progress, List<SituationTransDto> situationTransList) {
//        this.situationId = situationId;
//        this.thumbnail = thumbnail;
//        this.isCompleted = isCompleted;
//        this.progress = progress;
//        this.situationTransList = situationTransList;
//    }
}
