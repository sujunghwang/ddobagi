package com.a608.ddobagi.api.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a608.ddobagi.api.dto.respoonse.SituationByCategoryResponse;
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

	// 아직 못함
	// public List<SituationByCategoryResponse> getSituationListByCategory(String userLoginId, String categoryCommon) {
	// 	Long userId = userRepository.findUserByLoginId(userLoginId).getId();
	// 	List<SituationByCategoryResponse> situationList = learningRepositoryImpl.getSituationListByCategory(userId, categoryCommon);
	//
	// 	return situationList;
	// }

	public List<Long> findQuizListBySituationId(Long situationId) {
		List<Long> quizList = learningRepositoryImpl.selectQuizListBySituationId(situationId);
		return quizList;
	}
}
