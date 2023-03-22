package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QQuiz is a Querydsl query type for Quiz
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QQuiz extends EntityPathBase<Quiz> {

    private static final long serialVersionUID = 133280114L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QQuiz quiz = new QQuiz("quiz");

    public final StringPath afterSentence = createString("afterSentence");

    public final StringPath answer = createString("answer");

    public final StringPath beforeSentence = createString("beforeSentence");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath option1 = createString("option1");

    public final StringPath option2 = createString("option2");

    public final StringPath option3 = createString("option3");

    public final ListPath<QuizTrans, QQuizTrans> quizTransList = this.<QuizTrans, QQuizTrans>createList("quizTransList", QuizTrans.class, QQuizTrans.class, PathInits.DIRECT2);

    public final QScript script;

    public final QSituation situation;

    public QQuiz(String variable) {
        this(Quiz.class, forVariable(variable), INITS);
    }

    public QQuiz(Path<? extends Quiz> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QQuiz(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QQuiz(PathMetadata metadata, PathInits inits) {
        this(Quiz.class, metadata, inits);
    }

    public QQuiz(Class<? extends Quiz> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.script = inits.isInitialized("script") ? new QScript(forProperty("script"), inits.get("script")) : null;
        this.situation = inits.isInitialized("situation") ? new QSituation(forProperty("situation"), inits.get("situation")) : null;
    }

}

