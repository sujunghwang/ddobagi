package com.a608.ddobagi.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.a608.ddobagi.db.entity.information.News;
import com.a608.ddobagi.db.repository.NewsRepository;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.service
 * fileName       : NewsService
 * author         : modsiw
 * date           : 2023/03/24
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/24        modsiw       최초 생성
 */

@Service
@RequiredArgsConstructor
public class NewsService {

	private final NewsRepository newsRepository;

	public List<News> findAll() {
		return newsRepository.findAll();
	}
}
