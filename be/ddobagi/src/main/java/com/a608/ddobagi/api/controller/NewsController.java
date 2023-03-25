package com.a608.ddobagi.api.controller;

import com.a608.ddobagi.api.service.NewsService;
import com.a608.ddobagi.common.ApiResponse;
import com.a608.ddobagi.db.entity.information.News;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
@Component
public class NewsController {

	private final NewsService newsService;

	@GetMapping
	public ApiResponse<List<News>> getNewsList() {
		return new ApiResponse<>(newsService.findAll());
	}

	// cron "초 분 시 일 월 년"
	@Scheduled(cron = "00 00 00 * * *", zone = "Asia/Seoul")
	public void addNews(){
		System.out.println("스케줄러 동작 테스트");
		newsService.addNews();
	}

}
