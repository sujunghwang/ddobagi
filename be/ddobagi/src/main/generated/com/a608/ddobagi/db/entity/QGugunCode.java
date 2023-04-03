package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QGugunCode is a Querydsl query type for GugunCode
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QGugunCode extends EntityPathBase<GugunCode> {

    private static final long serialVersionUID = -601187934L;

    public static final QGugunCode gugunCode1 = new QGugunCode("gugunCode1");

    public final StringPath gugunCode = createString("gugunCode");

    public final StringPath gugunName = createString("gugunName");

    public QGugunCode(String variable) {
        super(GugunCode.class, forVariable(variable));
    }

    public QGugunCode(Path<? extends GugunCode> path) {
        super(path.getType(), path.getMetadata());
    }

    public QGugunCode(PathMetadata metadata) {
        super(GugunCode.class, metadata);
    }

}

