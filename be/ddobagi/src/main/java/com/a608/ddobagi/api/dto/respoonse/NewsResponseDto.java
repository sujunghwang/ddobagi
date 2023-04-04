package com.a608.ddobagi.api.dto.respoonse;

import java.time.LocalDate;

import com.a608.ddobagi.db.entity.information.Information;
import com.a608.ddobagi.db.entity.information.News;

import lombok.Builder;
import lombok.Data;

@Data
public class NewsResponseDto {

	private Long id;

	private String title;

	private String summary;

	private LocalDate publishedDate;

	private String url;

	@Builder
	public NewsResponseDto(Long id, String title, String summary, LocalDate publishedDate, String url) {
		this.id = id;
		this.title = title;
		this.summary = summary;
		this.publishedDate = publishedDate;
		this.url = url;
	}

	public NewsResponseDto(News news){
		this.id = news.getId();
		this.title = news.getTitle();
		this.summary = news.getSummary();
		this.publishedDate = news.getPublishedDate();
		this.url = news.getUrl();
	}
}
