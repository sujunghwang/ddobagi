package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.db.entity.Quiz;
import com.a608.ddobagi.db.entity.QuizTrans;
import com.a608.ddobagi.db.entity.Script;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jdk.swing.interop.SwingInterOpUtils;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.a608.ddobagi.db.entity.QQuiz.quiz; //q타입 클래스 직접 import 해서 사용
import static com.a608.ddobagi.db.entity.QQuizTrans.quizTrans;
import static com.a608.ddobagi.db.entity.QScript.script;
import static com.a608.ddobagi.db.entity.QScriptTrans.scriptTrans;
import static javax.persistence.CascadeType.ALL;
import static javax.persistence.FetchType.LAZY;

@Repository
public class QuizRepositoryImpl {

    @Autowired
    private JPAQueryFactory query;

//     public QuizRes selectQuiz(long quizId){
//         List<Quiz> x = query.select(quiz).from(quiz).join(quiz.quizTransList, quizTrans).fetchJoin().fetch();
//
//         System.out.println("=============");
//         System.out.println(x);
//
//
//         return query
//                 .select(Projections.fields(QuizRes.class,
//                         quiz.id,
//                         quiz.beforeSentence,
//                         quiz.afterSentence,
//                         quiz.answer,
//                         quiz.option1,
//                         quiz.option2,
//                         quiz.option3,
//                         quiz.quizTransList,
//                         quiz.script,
//                         script.defaultContent,
//                         script.startTime,
//                         script.endTime,
//                         script.subScriptList)
//                 ).from(quiz)
//                 .innerJoin(quiz.quizTransList, quizTrans)
// //                .on(quiz.id.eq(quizTrans.))
// //                .innerjoin(quiz.script, script)
// //                .innerjoin(script.subScriptList, scriptTrans)
//                 .fetchOne();
//     }

}
