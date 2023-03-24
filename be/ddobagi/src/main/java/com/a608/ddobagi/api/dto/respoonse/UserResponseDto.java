package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Lang;
import com.a608.ddobagi.db.entity.User;

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

	private Long userId;
	private String loginId;
	private String name;
	private int age;
	private int settleYear;
	private String userLang;

	@Builder
	public UserResponseDto(Long userId, String loginId, String name,
		int age, int settleYear, String userLang) {
		this.userId = userId;
		this.loginId = loginId;
		this.name = name;
		this.age = age;
		this.settleYear = settleYear;
		this.userLang = userLang;
	}

	public UserResponseDto(User user) {
		this.userId = user.getId();
		this.loginId = user.getLoginId();
		this.name = user.getName();
		this.age = user.getAge();
		this.settleYear = user.getSettleYear();
		this.userLang = user.getUserLang().toString();
	}
}
