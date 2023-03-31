package com.a608.ddobagi.db.entity.information;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QInformation is a Querydsl query type for Information
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QInformation extends EntityPathBase<Information> {

    private static final long serialVersionUID = 814442797L;

    public static final QInformation information = new QInformation("information");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath summary = createString("summary");

    public final StringPath title = createString("title");

    public final StringPath url = createString("url");

    public QInformation(String variable) {
        super(Information.class, forVariable(variable));
    }

    public QInformation(Path<? extends Information> path) {
        super(path.getType(), path.getMetadata());
    }

    public QInformation(PathMetadata metadata) {
        super(Information.class, metadata);
    }

}

