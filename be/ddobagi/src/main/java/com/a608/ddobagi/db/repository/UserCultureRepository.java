package com.a608.ddobagi.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.a608.ddobagi.db.entity.UserCulture;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : UserCultureRepository
 * author         : modsiw
 * date           : 2023/03/21
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/21        modsiw       최초 생성
 */
public interface UserCultureRepository extends JpaRepository<Long, UserCulture> {
	Long countByUserId(Long userId);
}
