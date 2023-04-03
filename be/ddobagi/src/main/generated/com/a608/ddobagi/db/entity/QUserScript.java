package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserScript is a Querydsl query type for UserScript
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUserScript extends EntityPathBase<UserScript> {

    private static final long serialVersionUID = 1105226195L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserScript userScript = new QUserScript("userScript");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Float> pronounce = createNumber("pronounce", Float.class);

    public final StringPath recordUrl = createString("recordUrl");

    public final QScript script;

    public final QUser user;

    public QUserScript(String variable) {
        this(UserScript.class, forVariable(variable), INITS);
    }

    public QUserScript(Path<? extends UserScript> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserScript(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserScript(PathMetadata metadata, PathInits inits) {
        this(UserScript.class, metadata, inits);
    }

    public QUserScript(Class<? extends UserScript> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.script = inits.isInitialized("script") ? new QScript(forProperty("script"), inits.get("script")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}

