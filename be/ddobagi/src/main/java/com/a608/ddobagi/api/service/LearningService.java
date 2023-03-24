package com.a608.ddobagi.api.service;

import java.util.List;

import com.a608.ddobagi.api.dto.respoonse.SituationWithUserResponseDto;
import com.a608.ddobagi.api.dto.respoonse.SituationWithoutUserResponseDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a608.ddobagi.api.dto.respoonse.SituationByCategoryResponseDto;
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
	// @Autowired
	private final UserRepository userRepository;

	 public List<SituationByCategoryResponseDto> getSituationListByCategory(Long userId, String categoryCommon) {
	 	List<SituationByCategoryResponseDto> situationList = learningRepository.getSituationListByCategory(userId, userId, categoryCommon);
		for(SituationByCategoryResponseDto situation : situationList) {
			System.out.println("situation : " + situation);
		}
	 	return situationList;
//		 List<SituationWithoutUserResponseDto> situationWithoutUserList = learningRepository.getSituationWithoutUser(categoryCommon);
//		 List<SituationWithUserResponseDto> situationListWithUser = learningRepository.getSituationWithUser(userId, userId, categoryCommon);
//		 System.out.println("situationList : " + situationWithoutUserList);
//		 System.out.println("situationListWithUser : " + situationListWithUser);
//		 return null;
	 }

	public List<Long> findQuizListBySituationId(Long situationId) {
		List<Long> quizList = learningRepositoryImpl.selectQuizListBySituationId(situationId);
		return quizList;
	}
}
