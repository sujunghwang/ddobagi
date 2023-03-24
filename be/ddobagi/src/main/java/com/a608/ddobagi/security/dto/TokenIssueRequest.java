package com.a608.ddobagi.security.dto;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class TokenIssueRequest {

	@NotNull
	private String refreshToken;
}
