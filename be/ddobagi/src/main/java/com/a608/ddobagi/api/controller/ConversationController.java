package com.a608.ddobagi.api.controller;

import com.a608.ddobagi.api.dto.respoonse.ScriptResponse;
import com.a608.ddobagi.api.dto.respoonse.SituationDetailResponse;
import com.a608.ddobagi.api.service.ConversationService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

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

    @PostMapping(value = "/api/conversations/record")
    public float saveRecord(@RequestParam("situation_id") Long situationId,
        @RequestParam("user_id") Long userId,
        @RequestParam("script_id") Long scriptId,
        @RequestPart("file")  MultipartFile file) throws IOException {

        // 발음평가 api 돌려서 점수 받아내서 db에 저장하고 점수만 return
        float score = conversationService.getScore(scriptId, file);
        // s3에 저장
        conversationService.saveRecord(situationId, userId, scriptId, file, score);

        return score;
    }

}
