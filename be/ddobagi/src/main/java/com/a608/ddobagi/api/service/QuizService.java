package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.request.UserQuizSaveRequestDto;
import com.a608.ddobagi.api.dto.respoonse.QuizResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserQuizSaveResponseDto;
import com.a608.ddobagi.db.entity.Quiz;
import com.a608.ddobagi.db.entity.Situation;
import com.a608.ddobagi.db.entity.User;
import com.a608.ddobagi.db.entity.UserQuiz;
import com.a608.ddobagi.db.repository.*;
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

    @Autowired
    UserQuizRepository userQuizRepository;

    @Autowired
    UserRepository userRepository;


    public List<QuizResponseDto> findQuiz(long quizId) {
        // 단어 퀴즈 문제 및 보기를 번역된 언어와 함께 조회
        return quizRepositoryImpl.selectQuiz(quizId);
    }

    public Long findQuizCnt(long situationId) {
        // situationId로 situation찾기
        Situation situation = situationRepository.findById(situationId);

        // 총 단어 퀴즈 문제 수 조회
        return quizRepository.countBySituation(situation);
    }

    public int findTriedQuizCnt(long userId, long situationId) {
        // 푼 단어 퀴즈 문제 수 조회
        return quizRepositoryImpl.selectTriedQuiz(userId, situationId).size();
    }

    public UserQuizSaveResponseDto saveUserQuiz(long userId, long quizId, UserQuizSaveRequestDto requestDto) {
        // 유저 아이디로 유저 조회
        User user = userRepository.findById(userId).orElseThrow(
                () -> new IllegalArgumentException("사용자 아이디가 존재하지 않습니다.: " + userId));
        // 퀴즈 아이디로 퀴즈 조회
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(
                () -> new IllegalArgumentException("퀴즈가 존재하지 않습니다.: " + quizId));

        UserQuiz userQuiz = userQuizRepository.findByUserIdAndQuizId(userId, quizId);
        if(userQuiz != null){
            // 풀어본 문제일 경우
            // 정답 여부 수정 후 return
            System.out.println(requestDto.isCorrected());
            UserQuiz modifyUserQuiz = userQuizRepository.save(userQuiz.toBuilder()
                    .id(userQuiz.getId())
                    .isNowCorrected(requestDto.isCorrected())
                    .isFirstCorrected(userQuiz.isFirstCorrected())
                    .user(user)
                    .quiz(quiz)
                    .build());

            return new UserQuizSaveResponseDto(modifyUserQuiz);
        }else{
            // 새로운 문제일 경우
            // 제출한 단어 퀴즈 문제 정답 여부와 함께 유저퀴즈에 저장 후 return
            userQuiz = userQuizRepository.save(UserQuiz.builder()
                    .isNowCorrected(requestDto.isCorrected())
                    .isFirstCorrected(requestDto.isCorrected())
                    .user(user)
                    .quiz(quiz)
                    .build());

            return new UserQuizSaveResponseDto(userQuiz);
        }
    }
}
