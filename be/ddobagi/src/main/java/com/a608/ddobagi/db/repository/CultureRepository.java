package com.a608.ddobagi.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.a608.ddobagi.db.entity.Culture;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : QuizRepository
 * author         : modsiw
 * date           : 2023/03/21
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/21        modsiw       최초 생성
 */
public interface CultureRepository extends JpaRepository<Culture, Long> {

	Long countBy();

	@Query("select coalesce(uc.isCompleted, false) from UserCulture uc"
		+ " where uc.user.id =:userId and uc.culture.id =:cultureId")
	Boolean isCompleted(@Param("userId") Long userId, @Param("cultureId") Long cultureId);

}
