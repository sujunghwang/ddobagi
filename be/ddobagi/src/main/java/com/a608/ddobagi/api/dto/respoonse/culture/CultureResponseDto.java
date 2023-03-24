package com.a608.ddobagi.api.dto.respoonse.culture;

import java.util.List;

import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.dto.respoonse
 * fileName       : CultureResponseDto
 * author         : modsiw
 * date           : 2023/03/22
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */

@Data
@RequiredArgsConstructor
public class CultureResponseDto {

	private List<CultureCategoryResponseDto> categoryName;

	private List<CultureContentDto> cultureList;


}
