package com.a608.ddobagi.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.api.dto.respoonse.culture.CultureResponseDto;
import com.a608.ddobagi.api.service.CultureService;
import com.a608.ddobagi.common.ApiResponse;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.controller
 * fileName       : CultureController
 * author         : modsiw
 * date           : 2023/03/22
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */

@RestController
@RequestMapping("/cultures")
@RequiredArgsConstructor
public class CultureController {

	private final CultureService cultureService;

	@GetMapping("/{userId}")
	public ApiResponse<CultureResponseDto> getCultureList(@PathVariable Long userId,
		@RequestParam String common) {
		return new ApiResponse<>(cultureService.findCultureList(userId, common));
	}

	// @GetMapping("/{cultureId}")
	// public ApiResponse<CultureResponseDto> getCultureDetail(@PathVariable Long cultureId) {
	// 	return new ApiResponse<>(cultureService.findCulture(cultureId));
	// }

	@PostMapping("/{cultureId}/users/{userId}")
	public ResponseEntity<?> completedWatchCultureVideo(@PathVariable Long cultureId, @PathVariable Long userId) {
		cultureService.completedWatchCultureVideo(cultureId, userId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
