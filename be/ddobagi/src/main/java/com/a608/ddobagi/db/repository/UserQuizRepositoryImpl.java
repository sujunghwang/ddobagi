package com.a608.ddobagi.db.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.a608.ddobagi.api.dto.respoonse.UserQuizReviewResponseDto;
import com.a608.ddobagi.db.entity.UserQuiz;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : UserQuizRepositoryImpl
 * author         : modsiw
 * date           : 2023/03/21
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/21        modsiw       최초 생성
 */

@Repository
@RequiredArgsConstructor
public class UserQuizRepositoryImpl {

	private final EntityManager em;

	public List<UserQuizReviewResponseDto> findUserQuizReviewList(Long userId) {
		return em.createQuery(
			"select new com.a608.ddobagi.api.dto.respoonse.UserQuizReviewResponseDto"
				+ "(q.id, q.beforeSentence, q.answer, q.afterSentence, q.option1, q.option2, q.option3)"
				+ " from Quiz q"
				+ " where q.id in"
				+ " (select uq.quiz.id"
				+ " from UserQuiz uq"
				+ " where uq.user.id = :userId"
				+ " and uq.isNowCorrected = :isNowCorrected)", UserQuizReviewResponseDto.class)
			.setParameter("userId", userId)
			.setParameter("isNowCorrected", true)
			.getResultList();
	}

	public List<UserQuizReviewResponseDto> findUserQuizReviewListForParents(Long userId) {
		return em.createQuery(
				"select new com.a608.ddobagi.api.dto.respoonse.UserQuizReviewResponseDto"
					+ "(q.id, q.beforeSentence, q.answer, q.afterSentence, q.option1, q.option2, q.option3)"
					+ " from Quiz q"
					+ " where q.id in"
					+ " (select uq.quiz.id"
					+ " from UserQuiz uq"
					+ " where uq.user.id = :userId"
					+ " and uq.isFirstCorrected = :isFirstCorrected)", UserQuizReviewResponseDto.class)
			.setParameter("userId", userId)
			.setParameter("isFirstCorrected", true)
			.getResultList();
	}

}
