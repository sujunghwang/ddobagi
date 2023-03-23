package com.a608.ddobagi.api.controller;

import java.util.List;

import com.a608.ddobagi.common.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.api.dto.respoonse.SituationByCategoryResponseDto;
import com.a608.ddobagi.api.service.LearningService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class LearningController {

	private final LearningService learningService;

	 @GetMapping(value = "/api/learnings/{userId}/{categoryCommon}")
	 public ApiResponse<List<SituationByCategoryResponseDto>> situationListByCategory(@PathVariable Long userId, @PathVariable String categoryCommon) {
	 	List<SituationByCategoryResponseDto> situationList = learningService.getSituationListByCategory(userId, categoryCommon);
	 	return new ApiResponse<>(learningService.getSituationListByCategory(userId, categoryCommon));
	 }

	@GetMapping(value = "/api/learnings/{situationId}")
	public List<Long> getQuizListBySituationId(@PathVariable Long situationId){
		List<Long> quizList = learningService.findQuizListBySituationId(situationId);
		return quizList;
	}

}