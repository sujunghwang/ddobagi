package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Lang;
import com.a608.ddobagi.db.entity.ScriptRole;

import java.time.LocalDateTime;
import java.util.Map;

public class ScriptResponse {
    Long scriptId;
    LocalDateTime startTime;
    LocalDateTime endTime;
    ScriptRole scriptRole;
    String defaultContent;
    String recordedUrl;
    Map<Lang, String> map;

    public ScriptResponse() {
    }

    public void setScriptId(Long scriptId) {
        this.scriptId = scriptId;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public void setRole(ScriptRole scriptRole) {
        this.scriptRole = scriptRole;
    }

    public void setDefaultContent(String defaultContent) {
        this.defaultContent = defaultContent;
    }

    public void setRecordedUrl(String recordedUrl) {
        this.recordedUrl = recordedUrl;
    }

    public void setMap(Map<Lang, String> map) {
        this.map = map;
    }

}

