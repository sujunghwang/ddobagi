package com.a608.ddobagi.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.a608.ddobagi.db.entity.information.News;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : NewsRepository
 * author         : modsiw
 * date           : 2023/03/24
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/24        modsiw       최초 생성
 */
public interface NewsRepository extends JpaRepository<News, Long> {

}
