package com.a608.ddobagi.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.api.dto.respoonse.UserProgressParentsResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserProgressResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserQuizReviewResponseDto;
import com.a608.ddobagi.api.service.UserService;
import com.a608.ddobagi.common.ApiResponse;

import lombok.RequiredArgsConstructor;

/**
 * packageName : com.a608.ddobagi.api.controller
 * fileName : ParentController
 * author : modsiw
 * date : 2023/03/22
 * description :
 * ===========================================================
 * DATE AUTHOR NOTE
 * -----------------------------------------------------------
 * 2023/03/22 modsiw 최초 생성
 */

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class ParentController {

	private final UserService userService;

	@GetMapping("/{userId}/parents/statistics")
	public ApiResponse<UserProgressParentsResponseDto> getUserProgressForParents(@PathVariable Long userId) {
		return new ApiResponse<>(userService.findUserProgressForParents(userId));
	}

	@GetMapping("/{userId}/parents/review")
	public ApiResponse<List<UserQuizReviewResponseDto>> getUserQuizReviewForParents(@PathVariable Long userId) {
		return new ApiResponse<>(userService.getUserQuizReviewForParents(userId));
	}

}
