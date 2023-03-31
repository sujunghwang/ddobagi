package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCategoryTrans is a Querydsl query type for CategoryTrans
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCategoryTrans extends EntityPathBase<CategoryTrans> {

    private static final long serialVersionUID = -1310927411L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCategoryTrans categoryTrans = new QCategoryTrans("categoryTrans");

    public final QCategory category;

    public final StringPath categoryName = createString("categoryName");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<Lang> lang = createEnum("lang", Lang.class);

    public QCategoryTrans(String variable) {
        this(CategoryTrans.class, forVariable(variable), INITS);
    }

    public QCategoryTrans(Path<? extends CategoryTrans> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCategoryTrans(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCategoryTrans(PathMetadata metadata, PathInits inits) {
        this(CategoryTrans.class, metadata, inits);
    }

    public QCategoryTrans(Class<? extends CategoryTrans> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new QCategory(forProperty("category")) : null;
    }

}

