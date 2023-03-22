package com.a608.ddobagi.api.controller;

import com.a608.ddobagi.api.dto.request.CheckPwRequestDto;
import com.a608.ddobagi.api.dto.request.UserQuizSaveRequestDto;
import com.a608.ddobagi.api.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/quizzes")
@RestController
public class QuizController {

    @Autowired
    private QuizService quizService;

    @GetMapping("/{situationId}/{quizId}")
    public ResponseEntity<?> getQuizDetail(@PathVariable Long quizId) {
        // 단어 문제 및 보기 조회 (번역 포함)
        return ResponseEntity.ok(quizService.findQuiz(quizId));
    }

    @GetMapping("/{situationId}")
    public ResponseEntity<?> getQuizCnt(@PathVariable Long situationId) {
        // 총 단어 퀴즈 문제 수 조회
        return ResponseEntity.ok(quizService.findQuizCnt(situationId));
    }

    @GetMapping("/{userId}/{situationId}/tried")
    public ResponseEntity<?> getTriedQuizCnt(@PathVariable Long userId, @PathVariable Long situationId) {
        // 푼 단어 퀴즈 문제 수 조회
        return ResponseEntity.ok(quizService.findTriedQuizCnt(userId, situationId));
    }

    @PostMapping("/{userId}/{situationId}/{quizId}")
    public ResponseEntity<?> saveUserQuiz(@PathVariable Long userId, @PathVariable Long quizId, @RequestBody UserQuizSaveRequestDto requestDto) {
        // 단어 퀴즈 문제 정답 여부 저장
        return ResponseEntity.ok(quizService.saveUserQuiz(userId, quizId, requestDto));
    }
}
