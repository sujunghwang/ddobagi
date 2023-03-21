package com.a608.ddobagi.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.api.dto.request.CheckPwRequestDto;
import com.a608.ddobagi.api.dto.request.UserUpdateRequestDto;
import com.a608.ddobagi.api.dto.respoonse.UserProgressResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserQuizReviewResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserResponseDto;
import com.a608.ddobagi.api.service.UserService;
import com.a608.ddobagi.common.ApiResponse;
import com.a608.ddobagi.security.dto.UserRequestDto;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.controller
 * fileName       : MyPageController
 * author         : modsiw
 * date           : 2023/03/20
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/20        modsiw       최초 생성
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

	private final UserService userService;

	//회원 정보 조회
	@GetMapping("/{userId}")
	public ApiResponse<UserResponseDto> getUserDetail(@PathVariable Long userId) {
		return new ApiResponse<>(userService.findUser(userId));
	}

	@PutMapping("/{userId}")
	public ApiResponse<UserResponseDto> modifyUser(@PathVariable Long userId, UserUpdateRequestDto requestDto) {
		return new ApiResponse<>(userService.modifyUser(userId, requestDto));
	}

	@PostMapping("/{userId}/password")
	public ApiResponse<Boolean> validateUserPassword(@PathVariable Long userId, CheckPwRequestDto requestDto) {
		return new ApiResponse<>(userService.checkPassword(userId, requestDto));
	}

	//회원의 오답 리스트 조회
	@GetMapping("/{userId}/review")
	public ApiResponse<List<UserQuizReviewResponseDto>> getUserQuizReviewList(@PathVariable Long userId) {
		return new ApiResponse<>(userService.findUserQuizReviewList(userId));
	}

	@GetMapping("/{userId}/progress")
	public ApiResponse<UserProgressResponseDto> getUserProgress(@PathVariable Long userId) {
		return new ApiResponse<>(userService.findUserProgress(userId));
	}

	@GetMapping()
	public ApiResponse<List<UserResponseDto>> getUserList() {
		return new ApiResponse<>(userService.findUserList());
	}
}
