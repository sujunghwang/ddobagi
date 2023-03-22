package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QScriptTrans is a Querydsl query type for ScriptTrans
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QScriptTrans extends EntityPathBase<ScriptTrans> {

    private static final long serialVersionUID = -2049990944L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QScriptTrans scriptTrans = new QScriptTrans("scriptTrans");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<Lang> lang = createEnum("lang", Lang.class);

    public final QScript script;

    public final StringPath transContent = createString("transContent");

    public QScriptTrans(String variable) {
        this(ScriptTrans.class, forVariable(variable), INITS);
    }

    public QScriptTrans(Path<? extends ScriptTrans> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QScriptTrans(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QScriptTrans(PathMetadata metadata, PathInits inits) {
        this(ScriptTrans.class, metadata, inits);
    }

    public QScriptTrans(Class<? extends ScriptTrans> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.script = inits.isInitialized("script") ? new QScript(forProperty("script"), inits.get("script")) : null;
    }

}

