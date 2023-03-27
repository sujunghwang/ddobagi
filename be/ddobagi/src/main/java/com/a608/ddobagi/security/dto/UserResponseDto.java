package com.a608.ddobagi.security.dto;

import com.a608.ddobagi.db.entity.Lang;
import com.a608.ddobagi.db.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDto {
	private Long id;
	private String loginId;
	private String name;
	private Lang userLang;

	public static UserResponseDto of(User user) {
		return UserResponseDto.builder()
			.id(user.getId())
			.loginId(user.getLoginId())
			.name(user.getName())
			.userLang(user.getUserLang())
			.build();
	}

}