package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Lang;
import lombok.Getter;

import java.util.Map;

@Getter
public class SituationDetailResponse {

    String situationVideoUrl;
    Map<Lang, Map<String,String>> lang;

    public SituationDetailResponse() {}

    public void setSituationVideoUrl(String situationVideoUrl) {
        this.situationVideoUrl = situationVideoUrl;
    }

    public void setLang(Map<Lang, Map<String,String>> lang) {
        this.lang = lang;
    }

}

