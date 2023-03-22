package com.a608.ddobagi.api.dto.respoonse.culture;

import com.a608.ddobagi.db.entity.Lang;

import lombok.Data;

/**
 *packageName    : com.a608.ddobagi.api.dto.respoonse.culture
 * fileName       : CultureContentQueryDto
 * author         : modsiw
 * date           : 2023/03/22
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */

@Data
public class CultureContentQueryDto {

	private Long cultureId;
	private Lang lang;
	private String title;
	private String description;

	public CultureContentQueryDto(Long cultureId, Lang lang, String title, String description) {
		this.cultureId = cultureId;
		this.lang = lang;
		this.title = title;
		this.description = description;
	}
}
