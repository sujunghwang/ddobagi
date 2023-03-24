package com.a608.ddobagi.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCategory is a Querydsl query type for Category
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCategory extends EntityPathBase<Category> {

    private static final long serialVersionUID = -1384614501L;

    public static final QCategory category = new QCategory("category");

    public final ListPath<CategoryTrans, QCategoryTrans> categoryTransList = this.<CategoryTrans, QCategoryTrans>createList("categoryTransList", CategoryTrans.class, QCategoryTrans.class, PathInits.DIRECT2);

    public final StringPath common = createString("common");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final ListPath<Situation, QSituation> situationList = this.<Situation, QSituation>createList("situationList", Situation.class, QSituation.class, PathInits.DIRECT2);

    public QCategory(String variable) {
        super(Category.class, forVariable(variable));
    }

    public QCategory(Path<? extends Category> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCategory(PathMetadata metadata) {
        super(Category.class, metadata);
    }

}

