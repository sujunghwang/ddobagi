package com.a608.ddobagi.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.security.dto.TokenDto;
import com.a608.ddobagi.security.dto.UserRequestDto;
import com.a608.ddobagi.security.dto.UserResponseDto;
import com.a608.ddobagi.security.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
// @CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {
	private final AuthService authService;

	@PostMapping("/auth/signup")
	public ResponseEntity<UserResponseDto> signup(@RequestBody UserRequestDto requestDto) {
		return ResponseEntity.ok(authService.register(requestDto));
	}

	@PostMapping("/auth/login")
	public ResponseEntity<TokenDto> login(@RequestBody UserRequestDto requestDto) {
		return ResponseEntity.ok(authService.login(requestDto));
	}

	// @PostMapping("/auth/refresh")
	// public ResponseEntity<TokenDto> refresh(@RequestBody TokenIssueRequest request) {
	// 	return ResponseEntity.ok(authService.refresh(request));
	// }
}