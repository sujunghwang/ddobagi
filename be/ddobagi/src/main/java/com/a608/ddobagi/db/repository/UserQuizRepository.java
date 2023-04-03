package com.a608.ddobagi.db.repository;

import java.util.List;
import java.util.Optional;

import com.a608.ddobagi.db.entity.Quiz;
import com.a608.ddobagi.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.a608.ddobagi.db.entity.UserQuiz;
import org.springframework.data.repository.query.Param;

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

	@Query("select count(uq) from UserQuiz uq where uq.user.id = :userId"
		+ " and uq.isNowCorrected = true")
	Long countByUserId(@Param("userId") Long userId);

	@Query("select count(uq) from UserQuiz uq where uq.user.id = :userId and uq.quiz.id = :quizId")
	Long existsByUserIdAndQuizId(@Param("userId") Long userId, @Param("quizId") Long quizId);

	@Query("select uq from UserQuiz uq where uq.user.id = :userId and uq.quiz.id = :quizId")
	UserQuiz findByUserIdAndQuizId(@Param("userId") Long userId, @Param("quizId") Long quizId);

	Long countBy();

	@Query("select uq.quiz.id from UserQuiz uq where uq.isNowCorrected = false and uq.user.id = :userId")
	List<Long> findIncorrectedQuizList(@Param("userId") Long userId);
}
