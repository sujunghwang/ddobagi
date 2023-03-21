package com.a608.ddobagi.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.a608.ddobagi.db.entity.UserQuiz;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : UserQuizRepository
 * author         : modsiw
 * date           : 2023/03/21
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/21        modsiw       최초 생성
 */
public interface UserQuizRepository extends JpaRepository<UserQuiz, Long> {
	Long countByUserId(Long userId);
}
