package com.a608.ddobagi.api.controller;

import com.a608.ddobagi.api.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/quizzes")
@RestController
public class QuizController {

    @Autowired
    private QuizService quizService;

    @GetMapping("/{situationId}/{quizId}")
    public ResponseEntity<?> quizDetails(@PathVariable long situationId, @PathVariable long quizId) {
        // 단어 문제 및 보기 조회 (번역 포함)
        return ResponseEntity.ok(quizService.findQuiz(quizId));
    }
}
