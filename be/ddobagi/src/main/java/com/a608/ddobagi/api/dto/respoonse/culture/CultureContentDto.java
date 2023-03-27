package com.a608.ddobagi.api.dto.respoonse.culture;

import java.util.List;

import lombok.Data;

/**
 *packageName    : com.a608.ddobagi.api.dto.respoonse
 * fileName       : CultureContentDto
 * author         : modsiw
 * date           : 2023/03/22
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */

@Data
public class CultureContentDto {

	private Long cultureId;
	private String url;
	private boolean isCompleted;

	private List<CultureContentQueryDto> cultureContentQueryDtoList;

	public CultureContentDto(Long cultureId, String url, boolean isCompleted) {
		this.cultureId = cultureId;
		this.url = url;
		this.isCompleted = isCompleted;
	}

	public CultureContentDto(Long cultureId, String url) {
		this.cultureId = cultureId;
		this.url = url;
	}
}
