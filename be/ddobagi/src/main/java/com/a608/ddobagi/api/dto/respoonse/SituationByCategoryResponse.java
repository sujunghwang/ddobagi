package com.a608.ddobagi.api.dto.respoonse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.a608.ddobagi.db.entity.SituationTrans;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
public class SituationByCategoryResponse {

    Long situationId;
    String situationThumbnail;
    List<SituationTransByCategoryResponse> kor = new ArrayList<>();
    List<SituationTransByCategoryResponse> chi = new ArrayList<>();
    List<SituationTransByCategoryResponse> vie = new ArrayList<>();

    // boolean isCompleted;
    // float progress;

    public SituationByCategoryResponse(Long situationId, String situationThumbnail,
        List<SituationTransByCategoryResponse> kor,
        List<SituationTransByCategoryResponse> chi,
        List<SituationTransByCategoryResponse> vie) {
        this.situationId = situationId;
        this.situationThumbnail = situationThumbnail;
        this.kor = kor;
        this.chi = chi;
        this.vie = vie;
    }
}
