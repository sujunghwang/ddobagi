package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.api.dto.respoonse.QuizResponseDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.a608.ddobagi.db.entity.QQuiz.quiz; //q타입 클래스 직접 import 해서 사용
import static com.a608.ddobagi.db.entity.QScript.script;
import static com.a608.ddobagi.db.entity.QScriptTrans.scriptTrans;

@Repository
public class QuizRepositoryImpl {

    @Autowired
    private JPAQueryFactory query;

    public List<QuizResponseDto> selectQuiz(long quizId){
        // 단어 퀴즈 문제 및 보기를 번역된 언어와 함께 조회
        return query
                .select(Projections.fields(QuizResponseDto.class,
                        quiz.afterSentence,
                        quiz.beforeSentence,
                        quiz.answer,
                        quiz.option1,
                        quiz.option2,
                        quiz.option3,
                        script.defaultContent,
                        script.startTime,
                        script.endTime,
                        scriptTrans.lang,
                        scriptTrans.transContent))
                .from(quiz)
                .join(quiz.script, script)
                .join(script.scriptTransList, scriptTrans)
                .where(quiz.id.eq(quizId))
                .fetch();
    }

}
