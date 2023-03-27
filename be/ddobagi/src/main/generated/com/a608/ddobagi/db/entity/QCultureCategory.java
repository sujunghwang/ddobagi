package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCultureCategory is a Querydsl query type for CultureCategory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCultureCategory extends EntityPathBase<CultureCategory> {

    private static final long serialVersionUID = -1772636785L;

    public static final QCultureCategory cultureCategory = new QCultureCategory("cultureCategory");

    public final StringPath common = createString("common");

    public final ListPath<CultureCategoryTrans, QCultureCategoryTrans> cultureCategoryTransList = this.<CultureCategoryTrans, QCultureCategoryTrans>createList("cultureCategoryTransList", CultureCategoryTrans.class, QCultureCategoryTrans.class, PathInits.DIRECT2);

    public final ListPath<Culture, QCulture> cultureList = this.<Culture, QCulture>createList("cultureList", Culture.class, QCulture.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public QCultureCategory(String variable) {
        super(CultureCategory.class, forVariable(variable));
    }

    public QCultureCategory(Path<? extends CultureCategory> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCultureCategory(PathMetadata metadata) {
        super(CultureCategory.class, metadata);
    }

}

