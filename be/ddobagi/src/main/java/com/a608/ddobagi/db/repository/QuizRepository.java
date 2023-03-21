package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.db.entity.Quiz;
import com.a608.ddobagi.db.entity.Situation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz,Long> {

	Long countBy();

	Long countBySituation(Situation situation);
}
