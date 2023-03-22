package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSituation is a Querydsl query type for Situation
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSituation extends EntityPathBase<Situation> {

    private static final long serialVersionUID = -1612598015L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSituation situation = new QSituation("situation");

    public final QCategory category;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final ListPath<Quiz, QQuiz> quizList = this.<Quiz, QQuiz>createList("quizList", Quiz.class, QQuiz.class, PathInits.DIRECT2);

    public final ListPath<Script, QScript> scriptList = this.<Script, QScript>createList("scriptList", Script.class, QScript.class, PathInits.DIRECT2);

    public final ListPath<SituationTrans, QSituationTrans> situationTransList = this.<SituationTrans, QSituationTrans>createList("situationTransList", SituationTrans.class, QSituationTrans.class, PathInits.DIRECT2);

    public final StringPath thumbnail = createString("thumbnail");

    public final StringPath videoUrl = createString("videoUrl");

    public QSituation(String variable) {
        this(Situation.class, forVariable(variable), INITS);
    }

    public QSituation(Path<? extends Situation> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSituation(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSituation(PathMetadata metadata, PathInits inits) {
        this(Situation.class, metadata, inits);
    }

    public QSituation(Class<? extends Situation> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new QCategory(forProperty("category")) : null;
    }

}

