package com.a608.ddobagi.security.dto;

import com.a608.ddobagi.db.entity.Lang;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TokenDto {
	private String grantType;
	private String accessToken;
	private String refreshToken;
	private Long tokenExpiresIn;

	private Long id;
	private String loginId;
	private String name;
	private Lang userLang;
}