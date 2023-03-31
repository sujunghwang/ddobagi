package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSidoCode is a Querydsl query type for SidoCode
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSidoCode extends EntityPathBase<SidoCode> {

    private static final long serialVersionUID = -1209262197L;

    public static final QSidoCode sidoCode1 = new QSidoCode("sidoCode1");

    public final StringPath sidoCode = createString("sidoCode");

    public final StringPath sidoName = createString("sidoName");

    public QSidoCode(String variable) {
        super(SidoCode.class, forVariable(variable));
    }

    public QSidoCode(Path<? extends SidoCode> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSidoCode(PathMetadata metadata) {
        super(SidoCode.class, metadata);
    }

}

