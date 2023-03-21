package com.a608.ddobagi.db.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;

import com.a608.ddobagi.db.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByLoginId(String loginId);
	User findUserByLoginId(String loginId);

	boolean existsByLoginId(String loginId);
	Optional<User> findByName(String Name);

	Optional<User> findById(Long id);

	@Query("select count(sc) from Script sc where sc.situation.category.common = :common")
	Long categoryCnt(@Param("common") String common);

	@Query("select count(us) from UserScript us where us.script.situation.category.common = :common and us.user.id = :userId")
	Long categoryUserDoneCnt(@Param("common") String common, @Param("userId") Long userId);

	@Query("select count(sc) from Script sc where sc.situation.category.common = 'SCHOOL'")
	Long schoolCategoryCnt();

	@Query("select count(sc) from Script sc where sc.situation.category.common = 'HOME'")
	Long homeCategoryCnt();

	@Query("select count(sc) from Script sc where sc.situation.category.common = 'STORE'")
	Long storeCategoryCnt();

	@Query("select count(sc) from Script sc where sc.situation.category.common = 'PLAYGROUND'")
	Long playgroundCategoryCnt();

	@Query("select count(us) from UserScript us where us.script.situation.category.common = 'SCHOOL'")
	Long schoolCategoryUserDoneCnt();

	@Query("select count(us) from UserScript us where us.script.situation.category.common = 'HOME'")
	Long homeCategoryUserDoneCnt();

	@Query("select count(us) from UserScript us where us.script.situation.category.common = 'STORE' and us.user.id = :userId")
	Long storeCategoryUserDoneCnt();

	@Query("select count(us) from UserScript us where us.script.situation.category.common = 'PLAYGROUND' and us.user.id = :userId")
	Long playgroundCategoryUserDoneCnt(@Param("userId") Long userId);

}
