package com.a608.ddobagi.db.repository;

import static com.a608.ddobagi.db.entity.QCategory.*;
import static com.a608.ddobagi.db.entity.QCategoryTrans.*;
import static com.a608.ddobagi.db.entity.QQuiz.*;
import static com.a608.ddobagi.db.entity.QScript.*;
import static com.a608.ddobagi.db.entity.QSituation.*;
import static com.a608.ddobagi.db.entity.QSituationTrans.*;
import static com.a608.ddobagi.db.entity.QUserScript.*;

import java.util.List;

import com.a608.ddobagi.api.dto.respoonse.SituationByCategoryResponse;
import com.a608.ddobagi.db.entity.UserScript;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class LearningRepositoryImpl {

	private final JPAQueryFactory queryFactory;

	// 아직 못함
// 	public List<SituationByCategoryResponse> getSituationListByCategory(Long userId, String categoryCommon) {
// /*
// 		Long situationId;
// 		String situationThumbnail;
// 		List<SituationTrans> situationTransList;
// 		boolean isCompleted; // userScript에서 pronounce가 3점 이상, userQuiz에서 isNowCorrected가 true인 것만 셌을 때 전체 개수랑 같으면 true
// 		float progress; // userScript, userQuiz 합쳐서
// */
//
// 		List<Tuple> result = queryFactory
// 			.select(situation.id, categoryTrans.category_name, situationTrans.lang, situationTrans.title, situation.thumbnail)
// 			.from(situation)
// 			.join(situation.category, category)
// 			.join(situation.situationTransList, situationTrans)
// 			.join(category.categoryTransList, categoryTrans)
// 			.on(category.common.eq(categoryCommon).and(categoryTrans.lang.eq(situationTrans.lang)))
// 			.fetch();
//
// 		System.out.println("===============" + result.size());
// 		for (Tuple c : result) {
// 			System.out.println(c);
// 		}
//
//
//
// 		List<Long> situationIdList = queryFactory
// 			.select(situation.id).distinct()
// 			.from(situation)
// 			.join(situation.category, category)
// 			.join(situation.situationTransList, situationTrans)
// 			.join(category.categoryTransList, categoryTrans)
// 			.on(category.common.eq(categoryCommon).and(categoryTrans.lang.eq(situationTrans.lang)))
// 			.fetch();
//
// 		for (Long id : situationIdList) {
// 			List<Long> count = queryFactory.select(userScript.script.id)
// 				.from(script)
// 				.leftJoin(userScript)
// 				.on(script.id.eq(userScript.script.id))
// 				.where(script.situation.id.eq(id))
// 				.fetch();
//
// 			System.out.println("count================");
// 			for (Long tuple : count) {
// 				System.out.println(tuple);
// 			}
// 		}
//
//
// 		List<UserScript> situation = queryFactory.select(userScript)
// 			.from(userScript)
// 			.fetch();
//
// 		System.out.println(situation.size());
//
// 		for (UserScript tuple : situation) {
// 			System.out.println("situationid================");
// 			System.out.println(tuple);
// 		}
// 		// for (Long id : situationIdList) {
// 		// 	List<Tuple> count = queryFactory.select(script.id, userScript.user.id, userScript.pronounce)
// 		// 		.from(script)
// 		// 		.leftJoin(userScript)
// 		// 		.on(script.id.eq(userScript.script.id))
// 		// 		.where(script.situation.id.eq(id))
// 		// 		.fetch();
// 		// 	System.out.println("================");
// 		// 	for (Tuple tuple : count) {
// 		// 		System.out.println(tuple);
// 		// 	}
// 		// }
//
//
// 		float progress = 0f;
// 		// 현재 시츄에이션에 딸린 스크립트 전체 개수 => for문 돌면서 구해야 할 듯?
//
//
// 		return null;
// 	}

	public List<Long> selectQuizListBySituationId(Long situationId) {
		List<Long> quizList = queryFactory.select(quiz.id)
			.from(quiz)
			.where(quiz.situation.id.eq(situationId))
			.fetch();

		return quizList;
	}
}
