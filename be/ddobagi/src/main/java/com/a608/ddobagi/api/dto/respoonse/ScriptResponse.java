package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Lang;
import com.a608.ddobagi.db.entity.ScriptRole;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Map;

import lombok.Data;

@Data
public class ScriptResponse {
    Long scriptId;
    Long startTime;
    Long endTime;
    ScriptRole scriptRole;
    String defaultContent;
    String recordedUrl;
    float pronounce;
    Lang lang;
    String transContent;

    public ScriptResponse(Long scriptId, Long startTime, Long endTime, ScriptRole scriptRole,
        String defaultContent, String recordedUrl, float pronounce, Lang lang, String transContent) {
        this.scriptId = scriptId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.scriptRole = scriptRole;
        this.defaultContent = defaultContent;
        this.recordedUrl = recordedUrl;
        this.pronounce = pronounce;
        this.lang = lang;
        this.transContent = transContent;
    }
}

