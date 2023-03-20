package com.a608.ddobagi.db.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.a608.ddobagi.db.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {


	// @Query("select u from User u where u.loginId = :loginId")
	// Optional<User> findByLoginId(@Param("loginId") String loginId);

	Optional<User> findByLoginId(String loginId);
	User findUserByLoginId(String loginId);

	boolean existsByLoginId(String loginId);
	Optional<User> findByName(String Name);

	Optional<User> findById(Long id);

}
