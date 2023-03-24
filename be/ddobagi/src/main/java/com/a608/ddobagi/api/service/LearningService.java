package com.a608.ddobagi.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.a608.ddobagi.api.dto.respoonse.learning.SituationContentByCategoryResponseDto;
import com.a608.ddobagi.api.dto.respoonse.learning.SituationTransDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a608.ddobagi.api.dto.respoonse.learning.SituationContentByCategoryQueryDto;
import com.a608.ddobagi.db.repository.LearningRepository;
import com.a608.ddobagi.db.repository.LearningRepositoryImpl;
import com.a608.ddobagi.db.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LearningService {

	private final LearningRepository learningRepository;
	private final LearningRepositoryImpl learningRepositoryImpl;

	 public List<SituationContentByCategoryResponseDto> getSituationListByCategory(Long userId, String categoryCommon) {
	 	List<SituationContentByCategoryQueryDto> situationList = learningRepository.getSituationListByCategory(userId, userId, categoryCommon);

		List<SituationContentByCategoryResponseDto> result = new ArrayList<>();

		for(int i = 0; i < situationList.size(); i++) {
			if (i % 3 == 0){
				SituationContentByCategoryResponseDto dto = new SituationContentByCategoryResponseDto();
				dto.setSituationId(situationList.get(i).getSituationId());
				dto.setThumbnail(situationList.get(i).getThumbnail());
				dto.setCompleted(situationList.get(i).isCompleted());
				dto.setProgress(situationList.get(i).getProgress());
				List<SituationTransDto> transList = new ArrayList<>();
				dto.setSituationTransList(transList);
				result.add(dto);
			}
		}

		for(int i = 0; i < situationList.size(); i++) {
			SituationContentByCategoryQueryDto dto = situationList.get(i);
			result.get(i / 3).getSituationTransList().add(new SituationTransDto(dto.getLang(), dto.getTitle()));
		}

//		for(SituationContentByCategoryResponseDto dto : result) {
//			System.out.println("result : " + dto);
//		}

	 	return result;
	 }

	public List<Long> findQuizListBySituationId(Long situationId) {
		List<Long> quizList = learningRepositoryImpl.selectQuizListBySituationId(situationId);
		return quizList;
	}
}
