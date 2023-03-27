package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSituationTrans is a Querydsl query type for SituationTrans
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSituationTrans extends EntityPathBase<SituationTrans> {

    private static final long serialVersionUID = 141641255L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSituationTrans situationTrans = new QSituationTrans("situationTrans");

    public final StringPath description = createString("description");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<Lang> lang = createEnum("lang", Lang.class);

    public final QSituation situation;

    public final StringPath title = createString("title");

    public QSituationTrans(String variable) {
        this(SituationTrans.class, forVariable(variable), INITS);
    }

    public QSituationTrans(Path<? extends SituationTrans> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSituationTrans(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSituationTrans(PathMetadata metadata, PathInits inits) {
        this(SituationTrans.class, metadata, inits);
    }

    public QSituationTrans(Class<? extends SituationTrans> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.situation = inits.isInitialized("situation") ? new QSituation(forProperty("situation"), inits.get("situation")) : null;
    }

}

