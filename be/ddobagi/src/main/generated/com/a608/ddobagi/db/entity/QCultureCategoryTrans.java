package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCultureCategoryTrans is a Querydsl query type for CultureCategoryTrans
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCultureCategoryTrans extends EntityPathBase<CultureCategoryTrans> {

    private static final long serialVersionUID = -1643418023L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCultureCategoryTrans cultureCategoryTrans = new QCultureCategoryTrans("cultureCategoryTrans");

    public final StringPath categoryName = createString("categoryName");

    public final QCultureCategory cultureCategory;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<Lang> lang = createEnum("lang", Lang.class);

    public QCultureCategoryTrans(String variable) {
        this(CultureCategoryTrans.class, forVariable(variable), INITS);
    }

    public QCultureCategoryTrans(Path<? extends CultureCategoryTrans> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCultureCategoryTrans(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCultureCategoryTrans(PathMetadata metadata, PathInits inits) {
        this(CultureCategoryTrans.class, metadata, inits);
    }

    public QCultureCategoryTrans(Class<? extends CultureCategoryTrans> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.cultureCategory = inits.isInitialized("cultureCategory") ? new QCultureCategory(forProperty("cultureCategory")) : null;
    }

}

