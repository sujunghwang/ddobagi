package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCenter is a Querydsl query type for Center
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCenter extends EntityPathBase<Center> {

    private static final long serialVersionUID = -1182267342L;

    public static final QCenter center = new QCenter("center");

    public final StringPath address = createString("address");

    public final StringPath gugun = createString("gugun");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath Latitude = createString("Latitude");

    public final StringPath Longitude = createString("Longitude");

    public final StringPath sido = createString("sido");

    public final StringPath tel = createString("tel");

    public final StringPath type = createString("type");

    public final StringPath zipCode = createString("zipCode");

    public QCenter(String variable) {
        super(Center.class, forVariable(variable));
    }

    public QCenter(Path<? extends Center> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCenter(PathMetadata metadata) {
        super(Center.class, metadata);
    }

}

