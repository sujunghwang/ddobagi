package com.a608.ddobagi.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;

import com.a608.ddobagi.db.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByLoginId(String loginId);

	boolean existsByLoginId(String loginId);

	Optional<User> findById(Long id);

	@Query("select count(sc) from Script sc where sc.situation.category.common = :common")
	Long categoryCnt(@Param("common") String common);

	@Query("select count(us) from UserScript us where"
		+ " us.script.situation.category.common = :common"
		+ " and us.user.id = :userId"
		+ " and us.pronounce >= 2")
	Long categoryUserDoneCnt(@Param("common") String common, @Param("userId") Long userId);

	Long countBy();

	@Query("select count(sc) from Script sc where sc.situation.id =:situationId")
	Long countScriptBySituationId(@Param("situationId") Long situationId);

	@Query("select count(us) from UserScript us"
		+ " where us.pronounce >= 2.0 and us.script.situation.id = :situationId"
		+ " and us.user.id = :userId")
	Long countScriptBySituationIdAndUserScriptPronounceOver2(
		@Param("situationId") Long situationId, @Param("userId") Long userId);

	@Query("select count(q) from Quiz q where q.situation.id = :situationId")
	Long countQuizBySituationId(@Param("situationId") Long situationId);

	@Query("select count(uq) from UserQuiz uq where uq.quiz.situation.id = :situationId"
		+ " and uq.isNowCorrected = true and uq.user.id = :userId")
	Long countQuizBySituationIdAndUserQuizIsNowCorrected(
		@Param("situationId") Long situationId, @Param("userId") Long userId);

}
