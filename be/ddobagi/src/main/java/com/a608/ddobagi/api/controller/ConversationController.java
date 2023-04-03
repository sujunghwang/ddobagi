package com.a608.ddobagi.api.controller;

import com.a608.ddobagi.api.dto.respoonse.ScriptResponse;
import com.a608.ddobagi.api.dto.respoonse.SituationDetailResponse;
import com.a608.ddobagi.api.service.ConversationService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class ConversationController {

    private final ConversationService conversationService;

    @GetMapping(value = "/conversations/{situationId}")
    public SituationDetailResponse getSituationDetails(@PathVariable Long situationId){
        return conversationService.findSituationDetails(situationId);
    }

    @GetMapping(value = "/conversations/{situationId}/{userId}/record")
    public Long getRecordCount(@PathVariable Long situationId, @PathVariable Long userId){
        return conversationService.findRecordCount(situationId, userId);
    }

    @GetMapping(value = "/conversations/{situationId}/{userId}/script")
    public List<ScriptResponse> getScriptList(@PathVariable Long situationId, @PathVariable Long userId){
        return conversationService.findScriptList(situationId, userId);
    }

    @PostMapping(value = "/conversations/record")
    public float saveRecord(@RequestParam("situation_id") String situationId,
        @RequestParam("user_id") String userId,
        @RequestParam("script_id") String scriptId,
        @RequestPart("file")  MultipartFile file) throws IOException {

        // 발음평가 api 돌려서 점수 받아내서 db에 저장하고 점수만 return
        float score = conversationService.getScore(Long.parseLong(scriptId), file);
        // s3에 저장
        conversationService.saveRecord(Long.parseLong(situationId), Long.parseLong(userId), Long.parseLong(scriptId), file, score);

        return score;
    }

}
