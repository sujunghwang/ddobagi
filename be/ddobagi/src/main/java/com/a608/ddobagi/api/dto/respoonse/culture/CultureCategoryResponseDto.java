package com.a608.ddobagi.api.dto.respoonse.culture;

import com.a608.ddobagi.db.entity.Lang;

import lombok.Data;

/**
 *packageName    : com.a608.ddobagi.api.dto.respoonse
 * fileName       : CultureCategoryResponseDto
 * author         : modsiw
 * date           : 2023/03/22
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */

@Data
public class CultureCategoryResponseDto {

	private Long categoryId;
	private Lang lang;
	private String categoryName;

	public CultureCategoryResponseDto(Long categoryId, Lang lang, String categoryName) {
		this.categoryId = categoryId;
		this.lang = lang;
		this.categoryName = categoryName;
	}
}
