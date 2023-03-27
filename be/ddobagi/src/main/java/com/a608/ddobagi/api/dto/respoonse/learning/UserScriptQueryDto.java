package com.a608.ddobagi.api.dto.respoonse.learning;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@ToString
@Data
@RequiredArgsConstructor
public class UserScriptQueryDto {
    Long situationId;
    Long completedScriptCnt;
    Long totalScriptCnt;

    @Builder
    public UserScriptQueryDto(Long situationId, Long completedScriptCnt, Long totalScriptCnt) {
        this.situationId = situationId;
        this.completedScriptCnt = completedScriptCnt;
        this.totalScriptCnt = totalScriptCnt;
    }
}
