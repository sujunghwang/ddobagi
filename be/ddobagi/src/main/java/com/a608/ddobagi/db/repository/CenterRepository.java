package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.api.dto.respoonse.CenterResponseDto;
import com.a608.ddobagi.db.entity.Center;
import com.a608.ddobagi.db.entity.Script;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CenterRepository extends JpaRepository<Center, Long> {

    List<Center> findCentersByGugun(String gugunCode);
}
