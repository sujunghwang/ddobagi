package com.a608.ddobagi.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.api.service.NewsService;
import com.a608.ddobagi.common.ApiResponse;
import com.a608.ddobagi.db.entity.information.News;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.controller
 * fileName       : NewsController
 * author         : modsiw
 * date           : 2023/03/24
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/24        modsiw       최초 생성
 */

@RestController
@RequestMapping("/parents/news")
@RequiredArgsConstructor
public class NewsController {

	private final NewsService newsService;

	@GetMapping
	public ApiResponse<List<News>> getNewsList() {
		return new ApiResponse<>(newsService.findAll());
	}
}
