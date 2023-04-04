package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.information.Information;

import lombok.Builder;
import lombok.Data;

@Data
public class InformationResponseDto {

	private Long id;

	private String title;

	private String summary;

	private String url;

	@Builder
	public InformationResponseDto(Long id, String title, String summary, String url) {
		this.id = id;
		this.title = title;
		this.summary = summary;
		this.url = url;
	}

	public InformationResponseDto(Information information){
		this.id = information.getId();
		this.title = information.getTitle();
		this.summary = information.getSummary();
		this.url = information.getUrl();
	}
}
