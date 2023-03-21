package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QScript is a Querydsl query type for Script
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QScript extends EntityPathBase<Script> {

    private static final long serialVersionUID = -725939032L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QScript script = new QScript("script");

    public final StringPath defaultContent = createString("defaultContent");

    public final TimePath<java.time.LocalTime> endTime = createTime("endTime", java.time.LocalTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<ScriptRole> scriptRole = createEnum("scriptRole", ScriptRole.class);

    public final ListPath<ScriptTrans, QScriptTrans> scriptTransList = this.<ScriptTrans, QScriptTrans>createList("scriptTransList", ScriptTrans.class, QScriptTrans.class, PathInits.DIRECT2);

    public final QSituation situation;

    public final TimePath<java.time.LocalTime> startTime = createTime("startTime", java.time.LocalTime.class);

    public final ListPath<UserScript, QUserScript> userScriptList = this.<UserScript, QUserScript>createList("userScriptList", UserScript.class, QUserScript.class, PathInits.DIRECT2);

    public QScript(String variable) {
        this(Script.class, forVariable(variable), INITS);
    }

    public QScript(Path<? extends Script> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QScript(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QScript(PathMetadata metadata, PathInits inits) {
        this(Script.class, metadata, inits);
    }

    public QScript(Class<? extends Script> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.situation = inits.isInitialized("situation") ? new QSituation(forProperty("situation"), inits.get("situation")) : null;
    }

}

