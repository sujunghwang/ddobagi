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

    public static final QCulture culture = new QCulture("culture");

    public final ListPath<CultureTrans, QCultureTrans> cultureTransList = this.<CultureTrans, QCultureTrans>createList("cultureTransList", CultureTrans.class, QCultureTrans.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath thumbnail = createString("thumbnail");

    public final StringPath videoUrl = createString("videoUrl");

    public QCulture(String variable) {
        super(Culture.class, forVariable(variable));
    }

    public QCulture(Path<? extends Culture> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCulture(PathMetadata metadata) {
        super(Culture.class, metadata);
    }

}

