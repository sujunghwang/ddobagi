package com.a608.ddobagi.api.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a608.ddobagi.api.dto.request.CheckPwRequestDto;
import com.a608.ddobagi.api.dto.request.UserUpdateRequestDto;
import com.a608.ddobagi.api.dto.respoonse.UserProgressResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserQuizReviewResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserResponseDto;
import com.a608.ddobagi.db.entity.Lang;
import com.a608.ddobagi.db.entity.User;
import com.a608.ddobagi.db.repository.CultureRepository;
import com.a608.ddobagi.db.repository.QuizRepository;
import com.a608.ddobagi.db.repository.ScriptRepository;
import com.a608.ddobagi.db.repository.UserCultureRepository;
import com.a608.ddobagi.db.repository.UserQuizRepository;
import com.a608.ddobagi.db.repository.UserQuizRepositoryImpl;
import com.a608.ddobagi.db.repository.UserRepository;
import com.a608.ddobagi.db.repository.UserScriptRepository;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.service
 * fileName       : UserService
 * author         : modsiw
 * date           : 2023/03/20
 * description    : 유저의 마이페이지 서비스 로직
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/20        modsiw       최초 생성
 */

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

	private static final String categorySchool = "SCHOOL";
	private static final String categoryHome = "HOME";
	private static final String categoryStore = "STORE";
	private static final String categoryPlayground = "PLAYGROUND";

	private final UserRepository userRepository;
	private final UserQuizRepositoryImpl userQuizRepositoryImpl;
	private final UserQuizRepository userQuizRepository;
	private final UserScriptRepository userScriptRepository;
	private final UserCultureRepository userCultureRepository;
	private final ScriptRepository scriptRepository;
	private final QuizRepository quizRepository;
	private final CultureRepository cultureRepository;
	private final PasswordEncoder passwordEncoder;

	public UserResponseDto findUser(Long userId) {
		User user = userRepository.findById(userId).orElseThrow(
			() -> new IllegalArgumentException("사용자 아이디가 존재하지 않습니다.: " + userId));

		return UserResponseDto.builder()
			.userId(user.getId())
			.loginId(user.getLoginId())
			.name(user.getName())
			.age(user.getAge())
			.userLang(user.getUserLang().toString())
			.build();
	}

	@Transactional
	public UserResponseDto modifyUser(Long userId, UserUpdateRequestDto requestDto) {
		User user = userRepository.findById(userId).orElseThrow(
			() -> new IllegalArgumentException("사용자 아이디가 존재하지 않습니다.: " + userId));

		User modifyUser = userRepository.save(user.toBuilder()
			.id(userId)
			.birth(requestDto.getBirth())
			.name(requestDto.getName())
			.pw(passwordEncoder.encode(requestDto.getPw()))
			.userLang(Lang.valueOf(requestDto.getUserLang()))
			.build());

		return UserResponseDto.builder()
			.loginId(modifyUser.getLoginId())
			.name(modifyUser.getName())
			.age(modifyUser.getAge())
			.userLang(modifyUser.getUserLang().toString())
			.build();
	}

	//비밀번호 확인
	public boolean checkPassword(Long userId, CheckPwRequestDto requestDto) {
		User user = userRepository.findById(userId).orElseThrow(
			() -> new IllegalArgumentException("사용자 아이디가 존재하지 않습니다.: " + userId));

		if (passwordEncoder.matches(requestDto.getPw(), user.getPw())) {
			return true;
		} else {
			throw new IllegalArgumentException(userId + " 의 비밀번호가 일치하지 않습니다.");
		}
	}

	//오답 리스트
	public List<UserQuizReviewResponseDto> findUserQuizReviewList(Long userId) {
		return userQuizRepositoryImpl.findUserQuizReviewList(userId);
	}

	public UserProgressResponseDto findUserProgress(Long userId) {
		int schoolCategoryProgress = 0;
		int homeCategoryProgess = 0;
		int storeCategoryProgress = 0;
		int playgroundCategoryProgress = 0;
		int scriptProgress = 0;
		int quizProgress = 0;
		int cultureProgress = 0;

		// ===== 퀴즈, 스크립트, 문화 진행률 ==== //
		if (userScriptRepository.countByUserId(userId) != 0L) {
			scriptProgress = (int)(userScriptRepository.countByUserId(userId)
				/ scriptRepository.countBy() * 100);
		}

		if (userQuizRepository.countByUserId(userId) != 0L) {
			quizProgress = (int)(userQuizRepository.countByUserId(userId)
				/ quizRepository.countBy() * 100);
		}

		if (userCultureRepository.countByUserId(userId) != 0L) {
			cultureProgress = (int)(userCultureRepository.countByUserId(userId)
				/ cultureRepository.countBy() * 100);
		}

		// ===== 카테고리 진행률 ===== //
		if (userRepository.categoryUserDoneCnt(categorySchool, userId) != 0L) {
			schoolCategoryProgress = (int)(userRepository.categoryUserDoneCnt(categorySchool, userId)
				/ userRepository.categoryCnt(categorySchool) * 100);
		}
		if (userRepository.categoryUserDoneCnt(categoryHome, userId) != 0L) {
			homeCategoryProgess = (int)(userRepository.categoryUserDoneCnt(categoryHome, userId)
				/ userRepository.categoryCnt(categoryHome) * 100);
		}

		if (userRepository.categoryUserDoneCnt(categoryStore, userId) != 0L) {
			storeCategoryProgress = (int)(userRepository.categoryUserDoneCnt(categoryStore, userId)
				/ userRepository.categoryCnt(categoryStore) * 100);
		}

		if (userRepository.categoryUserDoneCnt(categoryPlayground, userId) != 0L) {
			playgroundCategoryProgress = (int)(userRepository.categoryUserDoneCnt(categoryPlayground, userId)
				/ userRepository.categoryCnt(categoryPlayground));
		}

		return UserProgressResponseDto.builder()
			.schoolCategoryProgress(schoolCategoryProgress)
			.homeCategoryProgress(homeCategoryProgess)
			.storeCategoryProgress(storeCategoryProgress)
			.playgroundCategoryProgress(playgroundCategoryProgress)
			.scriptProgress(scriptProgress)
			.quizProgress(quizProgress)
			.cultureProgress(cultureProgress)
			.build();
	}

	public List<UserResponseDto> findUserList() {
		List<User> all = userRepository.findAll();

		List<UserResponseDto> collect = all.stream()
			.map(UserResponseDto::new)
			.collect(Collectors.toList());

		return collect;
	}
}
