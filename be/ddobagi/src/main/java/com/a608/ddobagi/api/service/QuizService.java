package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.respoonse.QuizRes;
import com.a608.ddobagi.db.repository.QuizRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuizService {
    @Autowired
    QuizRepositoryImpl quizRepositoryImpl;

    public List<QuizRes> findQuiz(long quizId){
        // 단어 퀴즈 문제 및 보기를 번역된 언어와 함께 조회
        return quizRepositoryImpl.selectQuiz(quizId);
    }
}
