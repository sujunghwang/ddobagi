package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserCulture is a Querydsl query type for UserCulture
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUserCulture extends EntityPathBase<UserCulture> {

    private static final long serialVersionUID = -902767194L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserCulture userCulture = new QUserCulture("userCulture");

    public final QCulture culture;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final BooleanPath isCompleted = createBoolean("isCompleted");

    public final QUser user;

    public QUserCulture(String variable) {
        this(UserCulture.class, forVariable(variable), INITS);
    }

    public QUserCulture(Path<? extends UserCulture> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserCulture(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserCulture(PathMetadata metadata, PathInits inits) {
        this(UserCulture.class, metadata, inits);
    }

    public QUserCulture(Class<? extends UserCulture> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.culture = inits.isInitialized("culture") ? new QCulture(forProperty("culture")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}

