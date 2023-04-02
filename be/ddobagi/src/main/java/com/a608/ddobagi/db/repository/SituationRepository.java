package com.a608.ddobagi.db.repository;

import java.util.List;

import com.a608.ddobagi.db.entity.Culture;
import com.a608.ddobagi.db.entity.Situation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SituationRepository extends JpaRepository<Situation,Long> {

    Long countBy();
    Situation findById(long id);

    @Query("select s.id from Situation s where s.category = :categoryId")
    List<Long> findSituationIdList(@Param("categoryId") Long categoryId);
}