package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCultureTrans is a Querydsl query type for CultureTrans
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCultureTrans extends EntityPathBase<CultureTrans> {

    private static final long serialVersionUID = -1890374729L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCultureTrans cultureTrans = new QCultureTrans("cultureTrans");

    public final QCulture culture;

    public final StringPath description = createString("description");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<Lang> lang = createEnum("lang", Lang.class);

    public final StringPath title = createString("title");

    public QCultureTrans(String variable) {
        this(CultureTrans.class, forVariable(variable), INITS);
    }

    public QCultureTrans(Path<? extends CultureTrans> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCultureTrans(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCultureTrans(PathMetadata metadata, PathInits inits) {
        this(CultureTrans.class, metadata, inits);
    }

    public QCultureTrans(Class<? extends CultureTrans> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.culture = inits.isInitialized("culture") ? new QCulture(forProperty("culture")) : null;
    }

}

