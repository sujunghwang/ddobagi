package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QQuizTrans is a Querydsl query type for QuizTrans
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QQuizTrans extends EntityPathBase<QuizTrans> {

    private static final long serialVersionUID = 399665238L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QQuizTrans quizTrans = new QQuizTrans("quizTrans");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<Lang> lang = createEnum("lang", Lang.class);

    public final QQuiz quiz;

    public final StringPath sentence = createString("sentence");

    public QQuizTrans(String variable) {
        this(QuizTrans.class, forVariable(variable), INITS);
    }

    public QQuizTrans(Path<? extends QuizTrans> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QQuizTrans(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QQuizTrans(PathMetadata metadata, PathInits inits) {
        this(QuizTrans.class, metadata, inits);
    }

    public QQuizTrans(Class<? extends QuizTrans> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.quiz = inits.isInitialized("quiz") ? new QQuiz(forProperty("quiz"), inits.get("quiz")) : null;
    }

}

