package com.a608.ddobagi.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.api.dto.respoonse.SituationByCategoryResponse;
import com.a608.ddobagi.api.service.LearningService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class LearningController {

	private final LearningService learningService;

	// 아직 못함
	// @GetMapping(value = "/api/learnings/{userLoginId}/{categoryCommon}")
	// public List<SituationByCategoryResponse> situationListByCategory(@PathVariable String userLoginId, @PathVariable("categoryCommon") String categoryCommon) {
	// 	List<SituationByCategoryResponse> situationList = learningService.getSituationListByCategory(userLoginId, categoryCommon);
	// 	return situationList;
	// }

	@GetMapping(value = "/api/learnings/{situationId}")
	public List<Long> getQuizListBySituationId(@PathVariable Long situationId){
		List<Long> quizList = learningService.findQuizListBySituationId(situationId);
		return quizList;
	}

}