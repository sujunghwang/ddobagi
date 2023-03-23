package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCulture is a Querydsl query type for Culture
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCulture extends EntityPathBase<Culture> {

    private static final long serialVersionUID = -1834314383L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCulture culture = new QCulture("culture");

    public final QCultureCategory cultureCategory;

    public final ListPath<CultureTrans, QCultureTrans> cultureTransList = this.<CultureTrans, QCultureTrans>createList("cultureTransList", CultureTrans.class, QCultureTrans.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath thumbnail = createString("thumbnail");

    public final StringPath videoUrl = createString("videoUrl");

    public QCulture(String variable) {
        this(Culture.class, forVariable(variable), INITS);
    }

    public QCulture(Path<? extends Culture> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCulture(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCulture(PathMetadata metadata, PathInits inits) {
        this(Culture.class, metadata, inits);
    }

    public QCulture(Class<? extends Culture> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cultureCategory = inits.isInitialized("cultureCategory") ? new QCultureCategory(forProperty("cultureCategory")) : null;
    }

}

