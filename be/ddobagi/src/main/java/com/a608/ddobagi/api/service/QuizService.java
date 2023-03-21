package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.respoonse.QuizResponseDto;
import com.a608.ddobagi.db.entity.Situation;
import com.a608.ddobagi.db.repository.QuizRepository;
import com.a608.ddobagi.db.repository.QuizRepositoryImpl;
import com.a608.ddobagi.db.repository.SituationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuizService {
    @Autowired
    QuizRepositoryImpl quizRepositoryImpl;

    @Autowired
    QuizRepository quizRepository;

    @Autowired
    SituationRepository situationRepository;

    public List<QuizResponseDto> findQuiz(long quizId){
        // 단어 퀴즈 문제 및 보기를 번역된 언어와 함께 조회
        return quizRepositoryImpl.selectQuiz(quizId);
    }

    public Long findQuizCnt(long situationId){
        // situationId로 situation찾기
        Situation situation = situationRepository.findById(situationId);

        // 총 단어 퀴즈 문제 수 조회
        return quizRepository.countBySituation(situation);
    }

    public int findTriedQuizCnt(long userId, long situationId) {
        // 푼 단어 퀴즈 문제 수 조회
        return quizRepositoryImpl.selectTriedQuiz(userId,situationId).size();
    }
}
