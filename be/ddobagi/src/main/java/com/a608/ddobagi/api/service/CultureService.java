package com.a608.ddobagi.api.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a608.ddobagi.api.dto.respoonse.culture.CultureResponseDto;
import com.a608.ddobagi.db.entity.Culture;
import com.a608.ddobagi.db.entity.User;
import com.a608.ddobagi.db.entity.UserCulture;
import com.a608.ddobagi.db.repository.CultureRepository;
import com.a608.ddobagi.db.repository.CultureRepositoryImpl;
import com.a608.ddobagi.db.repository.UserCultureRepository;
import com.a608.ddobagi.db.repository.UserRepository;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.service
 * fileName       : CultureService
 * author         : modsiw
 * date           : 2023/03/22
 * description    : 문화 페이지 서비스
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CultureService {

	private final UserCultureRepository userCultureRepository;
	private final UserRepository userRepository;
	private final CultureRepository cultureRepository;
	private final CultureRepositoryImpl cultureRepositoryImpl;

	public CultureResponseDto findCultureList(Long userId, String cultureCategoryCommon) {
		CultureResponseDto cultureResponseDto = new CultureResponseDto();
		cultureResponseDto.setCategoryName(cultureRepositoryImpl.findCultureCategories(cultureCategoryCommon));
		cultureResponseDto.setCultureList(
			cultureRepositoryImpl.findCultureContentByDto_optimization(userId, cultureCategoryCommon));

		// cultureResponseDto.getCultureList().forEach(c -> c.setCompleted(cultureRepository.isCompleted(userId, c.getCultureId())));
		System.out.println(cultureRepository.isCompleted(userId, 1L));

		return cultureResponseDto;
	}

	//영상 하나 조회했을 때 (해당 언어로 나와야함)
	public CultureResponseDto findCulture(Long cultureId) {
		return null;
	}

	@Transactional
	public void completedWatchCultureVideo(Long cultureId, Long userId) {

		Culture culture = cultureRepository.findById(cultureId)
			.orElseThrow(() -> new IllegalArgumentException("해당 문화 영상의 아이디가 존재하지 않습니다.: " + cultureId));

		User user = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("해당 사용자의 아이디가 존재하지 않습니다.: " + userId));

		userCultureRepository.save(UserCulture.builder()
				.isCompleted(true)
				.user(user)
				.culture(culture)
			.build());
	}
}
