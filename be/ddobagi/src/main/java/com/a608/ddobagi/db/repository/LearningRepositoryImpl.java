package com.a608.ddobagi.db.repository;

import static com.a608.ddobagi.db.entity.QQuiz.*;

import java.util.List;

import com.a608.ddobagi.api.dto.respoonse.SituationByCategoryResponseDto;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class LearningRepositoryImpl {

//	@Autowired
	private final JPAQueryFactory queryFactory;

	// 아직 못함
// 	public List<SituationByCategoryResponseDto> getSituationListByCategory(Long userId, String categoryCommon) {
//		JPAQueryFactory queryFactory = new JPAQueryFactory(entityManager);
//
//		BooleanExpression commonExpression = QCategory.category.common.eq("SCHOOL");
//
//		NumberPath<Long> idPath = Expressions.numberPath(Long.class, "id");
//		StringPath thumbnailPath = Expressions.stringPath("thumbnail");
//		EnumPath<Lang> langPath = Expressions.enumPath(Lang.class, "lang");
//		StringPath titlePath = Expressions.stringPath("title");
//
//		NumberExpression<Long> completedScriptsExpression = Expressions.numberTemplate(Long.class,
//				"SUM(IF({0} >= 2.0, 1, 0))", QUserScript.userScript.pronounce);
//
//		NumberExpression<Long> totalScriptsExpression = QScript.script.id.countDistinct();
//
//		NumberExpression<Long> completedQuizzesExpression = Expressions.numberTemplate(Long.class,
//				"SUM(IF({0} = 1, 1, 0))", QUserQuiz.userQuiz.isNowCorrected);
//
//		NumberExpression<Long> totalQuizzesExpression = QQuiz.quiz.id.countDistinct();
//
//		BooleanExpression isCompletedExpression = Expressions.booleanTemplate(
//				"(COUNT(DISTINCT {0}) = {1} AND COUNT(DISTINCT {2}) = {3})", QScript.script.id, completedScriptsExpression,
//				QQuiz.quiz.id, completedQuizzesExpression);
//
//		NumberExpression<Double> progressExpression = Expressions.numberTemplate(Double.class,
//				"ROUND((({0}/{1}) + ({2}/{3})) * 100 * 0.5, 1)", completedScriptsExpression, totalScriptsExpression,
//				completedQuizzesExpression, totalQuizzesExpression);
//
//		List<Tuple> result = queryFactory.select(
//						Projections.tuple(idPath, thumbnailPath, langPath, titlePath, completedScriptsExpression,
//								totalScriptsExpression, completedQuizzesExpression, totalQuizzesExpression, isCompletedExpression,
//								progressExpression))
//				.from(QCategory.category)
//				.join(QCategory.category.situationList, QSituation.situation)
//				.join(QSituation.situation.situationTransList, QSituationTrans.situationTrans)
//				.leftJoin(QSituation.situation.scriptList, QScript.script)
//				.leftJoin(QScript.script.userScriptList, QUserScript.userScript).on(QUserScript.userScript.user.id.eq(1L))
//				.leftJoin(QSituation.situation.quizList, QQuiz.quiz)
//				.leftJoin(QQuiz.quiz.userQuizList, QUserQuiz.userQuiz).on(QUserQuiz.userQuiz.user.id.eq(1L))
//				.where(commonExpression)
//				.groupBy(idPath, thumbnailPath, langPath, titlePath)
//				.fetch();
// 	}

	public List<Long> selectQuizListBySituationId(Long situationId) {
		List<Long> quizList = queryFactory.select(quiz.id)
			.from(quiz)
			.where(quiz.situation.id.eq(situationId))
			.fetch();

		return quizList;
	}
}
