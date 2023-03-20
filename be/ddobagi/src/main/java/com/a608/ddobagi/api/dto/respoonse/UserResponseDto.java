package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Lang;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.dto.respoonse
 * fileName       : UserResponseDto
 * author         : modsiw
 * date           : 2023/03/20
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/20        modsiw       최초 생성
 */

@Data
@RequiredArgsConstructor
public class UserResponseDto {

	private String loginId;
	private String name;
	private int age;
	private String userLang;

	@Builder
	public UserResponseDto(String loginId, String name, int age, String userLang) {
		this.loginId = loginId;
		this.name = name;
		this.age = age;
		this.userLang = userLang;
	}

}
