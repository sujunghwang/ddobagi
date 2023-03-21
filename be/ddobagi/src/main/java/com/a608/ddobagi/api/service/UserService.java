package com.a608.ddobagi.api.service;

import java.util.List;
import java.util.Objects;
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

	private static final String CATEGORY_SCHOOL = "SCHOOL";
	private static final String CATEGORY_HOME = "HOME";
	private static final String CATEGORY_STORE = "STORE";
	private static final String CATEGORY_PLAYGROUND = "PLAYGROUND";
	private static final Long ZERO = 0L;
	private static final int HUNDRED = 100;

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
		if (!Objects.equals(userScriptRepository.countByUserId(userId), ZERO)) {
			scriptProgress = (int)(userScriptRepository.countByUserId(userId)
				/ scriptRepository.countBy() * HUNDRED);
		}

		if (!Objects.equals(userQuizRepository.countByUserId(userId), ZERO)) {
			quizProgress = (int)(userQuizRepository.countByUserId(userId)
				/ quizRepository.countBy() * HUNDRED);
		}

		if (!Objects.equals(userCultureRepository.countByUserId(userId), ZERO)) {
			cultureProgress = (int)(userCultureRepository.countByUserId(userId)
				/ cultureRepository.countBy() * HUNDRED);
		}

		// ===== 카테고리 진행률 ===== //
		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_SCHOOL, userId), ZERO)) {
			schoolCategoryProgress = (int)(userRepository.categoryUserDoneCnt(CATEGORY_SCHOOL, userId)
				/ userRepository.categoryCnt(CATEGORY_SCHOOL) * HUNDRED);
		}
		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_HOME, userId), ZERO)) {
			homeCategoryProgess = (int)(userRepository.categoryUserDoneCnt(CATEGORY_HOME, userId)
				/ userRepository.categoryCnt(CATEGORY_HOME) * HUNDRED);
		}

		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_STORE, userId), ZERO)) {
			storeCategoryProgress = (int)(userRepository.categoryUserDoneCnt(CATEGORY_STORE, userId)
				/ userRepository.categoryCnt(CATEGORY_STORE) * HUNDRED);
		}

		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_PLAYGROUND, userId), ZERO)) {
			playgroundCategoryProgress = (int)(userRepository.categoryUserDoneCnt(CATEGORY_PLAYGROUND, userId)
				/ userRepository.categoryCnt(CATEGORY_PLAYGROUND));
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
