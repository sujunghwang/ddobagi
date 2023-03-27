package com.a608.ddobagi.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.a608.ddobagi.api.dto.respoonse.learning.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


//	 public List<SituationContentByCategoryResponseDto> getSituationListByCategory(Long userId, String categoryCommon) {
//	 	List<SituationContentByCategoryQueryDto> situationList = learningRepository.getSituationListByCategory(categoryCommon);
//		 List<UserScriptQueryDto> userScriptList = learningRepository.getCompletedScriptCntByUserIdAndCategory(userId, categoryCommon);
//		 List<UserQuizQueryDto> userQuizList = learningRepository.getCompletedQuizCntByUserIdAndCategory(userId, categoryCommon);
//		 System.out.println("situationList : " + situationList.size());
//		List<SituationContentByCategoryResponseDto> result = new ArrayList<>();
//
//		for(int i = 0; i < situationList.size(); i = i+3) {
//			SituationContentByCategoryResponseDto dto = new SituationContentByCategoryResponseDto();
//			dto.setSituationId(situationList.get(i).getSituationId());
//			dto.setThumbnail(situationList.get(i).getThumbnail());
//
//			UserScriptQueryDto userScript = userScriptList.get(i);
//			UserQuizQueryDto userQuiz = userQuizList.get(i);
//			double scriptProgress = (double)userScript.getCompletedScriptCnt() / (double)userScript.getTotalScriptCnt();
//			double quizProgress = (double)userQuiz.getCompletedQuizCnt() / (double)userQuiz.getTotalQuizCnt();
//			double progress = (scriptProgress + quizProgress) / 2.0;
//			System.out.println("i : " + i + ", scriptProgress : " + scriptProgress + ", quizProgress : " + quizProgress + ", progress : " + progress);
//			dto.setProgress(progress);
//			if(progress == 100.0) {
//				dto.setCompleted(true);
//			} else {
//				dto.setCompleted(false);
//			}
//			List<SituationTransDto> transList = new ArrayList<>();
//			dto.setSituationTransList(transList);
//			result.add(dto);
//		}
//
//		for(int i = 0; i < situationList.size(); i++) {
//			SituationContentByCategoryQueryDto dto = situationList.get(i);
//			result.get(i / 3).getSituationTransList().add(new SituationTransDto(dto.getLang(), dto.getTitle()));
//		}
//
////		for(SituationContentByCategoryResponseDto dto : result) {
////			System.out.println("result : " + dto);
////		}
//
//	 	return result;
//	 }

	public List<Long> findQuizListBySituationId(Long situationId) {
		List<Long> quizList = learningRepositoryImpl.selectQuizListBySituationId(situationId);
		return quizList;
	}
}
