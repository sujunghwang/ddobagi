package com.a608.ddobagi.api.service;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a608.ddobagi.api.dto.request.CheckPwRequestDto;
import com.a608.ddobagi.api.dto.request.UserUpdateRequestDto;
import com.a608.ddobagi.api.dto.respoonse.UserResponseDto;
import com.a608.ddobagi.db.entity.Lang;
import com.a608.ddobagi.db.entity.User;
import com.a608.ddobagi.db.repository.UserRepository;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.service
 * fileName       : UserService
 * author         : modsiw
 * date           : 2023/03/20
 * description    : 유저의 마이페이지 서비스 로직
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/20        modsiw       최초 생성
 */

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	PasswordEncoder passwordEncoder;
	
	public UserResponseDto findUser(Long userId) {
		User user = userRepository.findById(userId).orElseThrow(
			() -> new IllegalArgumentException("사용자 아이디가 존재하지 않습니다.: " + userId));

		return UserResponseDto.builder()
			.loginId(user.getLoginId())
			.name(user.getName())
			.age(user.getAge())
			.userLang(user.getUserLang().toString())
			.build();
	}

	@Transactional
	public UserResponseDto modifyUser(Long userId, UserUpdateRequestDto requestDto) {
		User user = userRepository.findById(userId).orElseThrow(
			() -> new IllegalArgumentException("사용자 아이디가 존재하지 않습니다.: " + userId));

		User modifyUser = userRepository.save(user.toBuilder()
			.birth(requestDto.getBirth())
			.name(requestDto.getName())
			.pw(passwordEncoder.encode(requestDto.getPw()))
			.userLang(Lang.valueOf(requestDto.getUserLang()))
			.build());

		return UserResponseDto.builder()
			.loginId(modifyUser.getLoginId())
			.name(modifyUser.getName())
			.age(modifyUser.getAge())
			.userLang(modifyUser.getUserLang().toString())
			.build();
	}

	public boolean checkPassword(Long userId, CheckPwRequestDto requestDto) {
		User user = userRepository.findById(userId).orElseThrow(
			() -> new IllegalArgumentException("사용자 아이디가 존재하지 않습니다.: " + userId));

		String inputPw = passwordEncoder.encode(requestDto.getPw());

		if (inputPw.equals(user.getPw())) {
			return true;
		} else {
			throw new IllegalIdentifierException(userId + " 의 비밀번호가 일치하지 않습니다.");
		}
	}

}
