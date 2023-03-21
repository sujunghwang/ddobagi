package com.a608.ddobagi.api.controller;

import com.a608.ddobagi.api.dto.respoonse.ScriptResponse;
import com.a608.ddobagi.api.dto.respoonse.SituationDetailResponse;
import com.a608.ddobagi.api.service.ConversationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ConversationController {

    private final ConversationService conversationService;

    @GetMapping(value = "/api/conversations/{situationId}")
    public SituationDetailResponse getSituationDetails(@PathVariable Long situationId){
        return conversationService.findSituationDetails(situationId);
    }

    @GetMapping(value = "/api/conversations/{situationId}/{userId}/record")
    public Long getRecordCount(@PathVariable Long situationId, @PathVariable Long userId){
        return conversationService.findRecordCount(situationId, userId);
    }

    @GetMapping(value = "/api/conversations/{situationId}/{userId}/script")
    public List<ScriptResponse> getScriptList(@PathVariable Long situationId, @PathVariable Long userId){
        return conversationService.findScriptList(situationId, userId);
    }




}
