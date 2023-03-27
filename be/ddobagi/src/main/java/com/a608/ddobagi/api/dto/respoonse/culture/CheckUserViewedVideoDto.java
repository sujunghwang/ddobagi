package com.a608.ddobagi.api.dto.respoonse.culture;

import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.dto.respoonse.culture
 * fileName       : checkUserViewedVideo
 * author         : modsiw
 * date           : 2023/03/27
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/27        modsiw       최초 생성
 */

@Data
@RequiredArgsConstructor
public class CheckUserViewedVideoDto {

	Long cultureId;
	boolean isCompleted;

	public CheckUserViewedVideoDto(Long cultureId, boolean isCompleted) {
		this.cultureId = cultureId;
		this.isCompleted = isCompleted;
	}
}
