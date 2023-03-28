package com.a608.ddobagi.db.repository;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.a608.ddobagi.db.entity.Situation;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : SituationRepositoryImpl
 * author         : modsiw
 * date           : 2023/03/28
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/28        modsiw       최초 생성
 */

@Repository
@RequiredArgsConstructor
public class SituationRepositoryImpl {

	private final EntityManager em;

	public List<Long> findSituationList(Long categoryId) {
		List<Situation> situationList = em.createQuery(
				"select s from Situation s"
					+ " where s.category.id = :categoryId", Situation.class)
			.setParameter("categoryId", categoryId)
			.getResultList();

		return findSituationIdList(situationList);
	}

	public List<Long> findSituationIdList(List<Situation> result) {
		return result.stream()
			.map(s -> s.getId())
			.collect(Collectors.toList());
	}
}
