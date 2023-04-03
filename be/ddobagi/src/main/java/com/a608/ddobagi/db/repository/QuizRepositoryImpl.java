package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.api.dto.respoonse.QuizResponseDto;
import com.a608.ddobagi.db.entity.QQuiz;
import com.a608.ddobagi.db.entity.QUserQuiz;
import com.a608.ddobagi.db.entity.UserQuiz;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.a608.ddobagi.db.entity.QQuiz.quiz; //q타입 클래스 직접 import 해서 사용
import static com.a608.ddobagi.db.entity.QScript.script;
import static com.a608.ddobagi.db.entity.QScriptTrans.scriptTrans;
import static com.a608.ddobagi.db.entity.QUserQuiz.userQuiz;
import static com.a608.ddobagi.db.entity.QSituation.situation;

@Repository
public class QuizRepositoryImpl {

    @Autowired
    private JPAQueryFactory query;

    public List<Tuple> selectQuiz(long quizId){
        // 단어 퀴즈 문제 및 보기를 번역된 언어와 함께 조회
        return query
                .select(
                        quiz.beforeSentence,
                        quiz.afterSentence,
                        quiz.answer,
                        quiz.option1,
                        quiz.option2,
                        quiz.option3,
                        script.defaultContent,
                        quiz.situation,
                        script.startTime,
                        script.endTime,
                        scriptTrans.lang,
                        scriptTrans.transContent)
                .from(quiz)
                .join(quiz.script, script)
                .join(quiz.situation, situation)
                .join(script.scriptTransList, scriptTrans)
                .where(quiz.id.eq(quizId))
                .fetch();
    }

    public List<Tuple> selectTriedQuiz(long userId, long situationId) {
        // 유저가 푼 문제 리스트 조회
        return query
                .select(userQuiz,quiz)
                .from(userQuiz)
                .join(userQuiz.quiz, quiz)
                .on(quiz.situation.id.eq(situationId))
                .where(userQuiz.user.id.eq(userId))
                .fetch();
    }
}
