package com.a608.ddobagi.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.a608.ddobagi.db.entity.UserScript;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : UserScriptRepository
 * author         : modsiw
 * date           : 2023/03/21
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/21        modsiw       최초 생성
 */
public interface UserScriptRepository extends JpaRepository<UserScript, Long> {

	@Query("select count(us) from UserScript us where"
		+ " us.script.situation.category.common = :common"
		+ " and us.user.id = :userId"
		+ " and us.pronounce >= 2")
	Long countByUserId(@Param("userId") Long userId);

	@Query("select us from UserScript us where us.user.id = :userId and us.script.id = :scriptId")
	UserScript findByUserIdAndScriptId(@Param("userId") Long userId, @Param("scriptId") Long quizId);

	@Query("select count(us) from UserScript us where us.user.id = :userId"
		+ " and us.recordUrl is not null")
	Long countUserRecord(@Param("userId") Long userId);
}
