package com.a608.ddobagi.db.repository;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : UserRepositoryImpl
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
public class UserRepositoryImpl {

	private final EntityManager em;

	//해당 시츄에이션에 있는 스크립트 개수
	// public int getScriptCountBySituationId(Long situationId) {
	// 	em.createQuery()
	// }
}
