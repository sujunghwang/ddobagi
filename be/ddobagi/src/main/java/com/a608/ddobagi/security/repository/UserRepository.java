package com.a608.ddobagi.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.a608.ddobagi.db.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByLoginId(String loginId);

	boolean existsByLoginId(String loginId);
	Optional<User> findByName(String Name);

	Optional<User> findById(Long id);

}
