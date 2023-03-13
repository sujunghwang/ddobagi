package com.a608.ddobagi.security.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a608.ddobagi.db.entity.User;
import com.a608.ddobagi.security.TokenProvider;
import com.a608.ddobagi.security.dto.TokenDto;
import com.a608.ddobagi.security.dto.UserRequestDto;
import com.a608.ddobagi.security.dto.UserResponseDto;
import com.a608.ddobagi.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AuthService {
	private final AuthenticationManagerBuilder managerBuilder;
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final TokenProvider tokenProvider;

	@Transactional
	public UserResponseDto register(UserRequestDto requestDto) {
		if (userRepository.existsByLoginId(requestDto.getLoginId())) {
			throw new RuntimeException("이미 가입되어 있는 유저입니다");
		}

		User user = requestDto.toEntity(passwordEncoder);
		return UserResponseDto.of(userRepository.save(user));
	}

	@Transactional
	public TokenDto login(UserRequestDto requestDto) {
		UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

		Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

		return tokenProvider.generateTokenDto(authentication, requestDto);
	}


}