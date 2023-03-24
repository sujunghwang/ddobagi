package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.db.entity.Culture;
import com.a608.ddobagi.db.entity.Situation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SituationRepository extends JpaRepository<Situation,Long> {

    Long countBy();
    Situation findById(long id);

    // Double avgC
}