package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDongCode is a Querydsl query type for DongCode
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDongCode extends EntityPathBase<DongCode> {

    private static final long serialVersionUID = -272655314L;

    public static final QDongCode dongCode1 = new QDongCode("dongCode1");

    public final StringPath dongCode = createString("dongCode");

    public final StringPath dongName = createString("dongName");

    public final StringPath gugunName = createString("gugunName");

    public final StringPath sidoName = createString("sidoName");

    public QDongCode(String variable) {
        super(DongCode.class, forVariable(variable));
    }

    public QDongCode(Path<? extends DongCode> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDongCode(PathMetadata metadata) {
        super(DongCode.class, metadata);
    }

}

