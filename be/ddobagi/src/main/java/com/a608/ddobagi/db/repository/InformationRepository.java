package com.a608.ddobagi.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.a608.ddobagi.db.entity.information.Information;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : InformationRepository
 * author         : modsiw
 * date           : 2023/03/24
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/24        modsiw       최초 생성
 */

public interface InformationRepository extends JpaRepository<Information, Long> {
}
