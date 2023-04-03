package com.a608.ddobagi.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.a608.ddobagi.api.dto.respoonse.learning.SituationContentByCategoryResponseDto;
import com.a608.ddobagi.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.api.dto.respoonse.learning.SituationContentByCategoryQueryDto;
import com.a608.ddobagi.api.service.LearningService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class LearningController {

	private final LearningService learningService;

	 @GetMapping(value = "/learnings/{userId}/{categoryCommon}")
	 public ResponseEntity<Object> situationListByCategory(@PathVariable Long userId, @PathVariable String categoryCommon) {
		 Map<String, Object> response = new HashMap<>();
		 List<SituationContentByCategoryResponseDto> result = learningService.getSituationListByCategory(userId, categoryCommon);
		 response.put("situationList", result);
		 return ResponseEntity.ok(response);
	 }

	@GetMapping(value = "/learnings/{situationId}")
	public List<Long> getQuizListBySituationId(@PathVariable Long situationId){
		List<Long> quizList = learningService.findQuizListBySituationId(situationId);
		return quizList;
	}

}