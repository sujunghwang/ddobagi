package com.a608.ddobagi.api.service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a608.ddobagi.api.dto.request.CheckPwRequestDto;
import com.a608.ddobagi.api.dto.request.UserUpdateRequestDto;
import com.a608.ddobagi.api.dto.respoonse.UserProgressParentsResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserProgressResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserQuizReviewResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserResponseDto;
import com.a608.ddobagi.db.entity.Lang;
import com.a608.ddobagi.db.entity.User;
import com.a608.ddobagi.db.repository.CultureRepository;
import com.a608.ddobagi.db.repository.QuizRepository;
import com.a608.ddobagi.db.repository.ScriptRepository;
import com.a608.ddobagi.db.repository.SituationRepository;
import com.a608.ddobagi.db.repository.SituationRepositoryImpl;
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
 * 2023/03/20       modsiw      최초 생성
 * 2023/03/21		modsiw		부모님 페이지 통계 추가
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
	private final SituationRepository situationRepository;
	private final SituationRepositoryImpl situationRepositoryImpl;

	public UserResponseDto findUser(Long userId) {
		User user = userRepository.findById(userId).orElseThrow(
			() -> new IllegalArgumentException("사용자 아이디가 존재하지 않습니다.: " + userId));

		return UserResponseDto.builder()
			.userId(user.getId())
			.loginId(user.getLoginId())
			.name(user.getName())
			.age(user.getAge())
			.settleYear(user.getSettleYear())
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
			.settleYear(requestDto.getSettleYear())
			.pw(passwordEncoder.encode(requestDto.getPw()))
			.userLang(Lang.valueOf(requestDto.getUserLang()))
			.build());

		return UserResponseDto.builder()
			.loginId(modifyUser.getLoginId())
			.name(modifyUser.getName())
			.age(modifyUser.getAge())
			.settleYear(modifyUser.getSettleYear())
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
	public List<Long> findUserQuizReviewList(Long userId) {
		// return userQuizRepositoryImpl.findUserQuizReviewList(userId);
		return userQuizRepository.findIncorrectedQuizList(userId);
	}


	public UserProgressResponseDto findUserProgress(Long userId) {
		int viewedVideoCount = Math.toIntExact(calCountUserViewedVideo(userId));
		int recordedScriptCount = Math.toIntExact(calCountUserStudiedQuiz(userId));
		int studiedQuizCount = Math.toIntExact(calCountUserRecorded(userId));
		int crownCount = getCrownCntByCategoryId(userId);
		// int crownCount = 0;

		int schoolCategoryProgress = 0;
		int homeCategoryProgess = 0;
		int storeCategoryProgress = 0;
		int playgroundCategoryProgress = 0;
		int scriptProgress = 0;
		int quizProgress = 0;
		int cultureProgress = 0;

		// ===== 퀴즈, 스크립트, 문화 진행률 ==== //
		if (!Objects.equals(userScriptRepository.countByUserId(userId), ZERO)) {
			scriptProgress = (int)((double)userScriptRepository.countByUserId(userId)
				/ scriptRepository.countBy() * HUNDRED);
		}

		// System.out.println(scriptProgress);

		// System.out.println("================================");
		// System.out.println(userScriptRepository.countByUserId(userId));
		// System.out.println(scriptRepository.countBy());
		// System.out.println("================================");

		if (!Objects.equals(userQuizRepository.countByUserId(userId), ZERO)) {
			System.out.println("잘왓습니당");
			quizProgress = (int)((double)userQuizRepository.countByUserId(userId)
				/ quizRepository.countBy() * HUNDRED);
		}

		if (!Objects.equals(userCultureRepository.countByUserId(userId), ZERO)) {
			cultureProgress = (int)((double)userCultureRepository.countByUserId(userId)
				/ cultureRepository.countBy() * HUNDRED);
		}

		// ===== 카테고리 진행률 ===== //
		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_SCHOOL, userId), ZERO)) {
			schoolCategoryProgress = (int)((double)userRepository.categoryUserDoneCnt(CATEGORY_SCHOOL, userId)
				/ (double)userRepository.categoryCnt(CATEGORY_SCHOOL) * HUNDRED);
		}
		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_HOME, userId), ZERO)) {
			homeCategoryProgess = (int)((double)userRepository.categoryUserDoneCnt(CATEGORY_HOME, userId)
				/ userRepository.categoryCnt(CATEGORY_HOME) * HUNDRED);
		}

		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_STORE, userId), ZERO)) {
			storeCategoryProgress = (int)((double)userRepository.categoryUserDoneCnt(CATEGORY_STORE, userId)
				/ userRepository.categoryCnt(CATEGORY_STORE) * HUNDRED);
		}

		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_PLAYGROUND, userId), ZERO)) {
			playgroundCategoryProgress = (int)((double)userRepository.categoryUserDoneCnt(CATEGORY_PLAYGROUND, userId)
				/ userRepository.categoryCnt(CATEGORY_PLAYGROUND));
		}

		return UserProgressResponseDto.builder()
			.viewedVideoCount(viewedVideoCount)
			.recordedScriptCount(recordedScriptCount)
			.studiedQuizCount(studiedQuizCount)
			.crownCount(crownCount)
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

	public UserProgressParentsResponseDto findUserProgressForParents(Long userId) {

		int schoolCategoryProgress = 0;
		int homeCategoryProgess = 0;
		int storeCategoryProgress = 0;
		int playgroundCategoryProgress = 0;
		int scriptProgress = 0;
		int quizProgress = 0;
		int cultureProgress = 0;

		// ===== 퀴즈, 스크립트, 문화 진행률 ==== //
		if (!Objects.equals(userScriptRepository.countByUserId(userId), ZERO)) {
			scriptProgress = (int)((double)userScriptRepository.countByUserId(userId)
				/ scriptRepository.countBy() * HUNDRED);
		}

		if (!Objects.equals(userQuizRepository.countByUserId(userId), ZERO)) {
			quizProgress = (int)((double)userQuizRepository.countByUserId(userId)
				/ quizRepository.countBy() * HUNDRED);
		}

		if (!Objects.equals(userCultureRepository.countByUserId(userId), ZERO)) {
			cultureProgress = (int)((double)userCultureRepository.countByUserId(userId)
				/ cultureRepository.countBy() * HUNDRED);
		}

		// ===== 카테고리 진행률 ===== //
		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_SCHOOL, userId), ZERO)) {
			schoolCategoryProgress = (int)((double)userRepository.categoryUserDoneCnt(CATEGORY_SCHOOL, userId)
				/ userRepository.categoryCnt(CATEGORY_SCHOOL) * HUNDRED);
		}
		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_HOME, userId), ZERO)) {
			homeCategoryProgess = (int)((double)userRepository.categoryUserDoneCnt(CATEGORY_HOME, userId)
				/ userRepository.categoryCnt(CATEGORY_HOME) * HUNDRED);
		}

		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_STORE, userId), ZERO)) {
			storeCategoryProgress = (int)((double)userRepository.categoryUserDoneCnt(CATEGORY_STORE, userId)
				/ userRepository.categoryCnt(CATEGORY_STORE) * HUNDRED);
		}

		if (!Objects.equals(userRepository.categoryUserDoneCnt(CATEGORY_PLAYGROUND, userId), ZERO)) {
			playgroundCategoryProgress = (int)((double)userRepository.categoryUserDoneCnt(CATEGORY_PLAYGROUND, userId)
				/ userRepository.categoryCnt(CATEGORY_PLAYGROUND));
		}

		return UserProgressParentsResponseDto.builder()
			.schoolCategoryProgress(schoolCategoryProgress)
			.homeCategoryProgress(homeCategoryProgess)
			.storeCategoryProgress(storeCategoryProgress)
			.playgroundCategoryProgress(playgroundCategoryProgress)
			.scriptProgress(scriptProgress)
			.quizProgress(quizProgress)
			.cultureProgress(cultureProgress)
			.userAllProgressAvg(calAllUserProgress(userId))
			.otherAllProgressAvg(calUserProgress())
			.userPronounceScoreAvg(calUserPronounceAvg(userId))
			.otherPronounceScoreAvg(calAllUserPronounceAvg())
			.build();
	}

	public List<UserQuizReviewResponseDto> getUserQuizReviewForParents(Long userId) {
		return userQuizRepositoryImpl.findUserQuizReviewListForParents(userId);
	}

	// ===== 계산 로직 ===== //

	//왕관 개수 세기
	public int getCrownCntByCategoryId(Long userId) {

		int categoryId1 = calCountUserCrownByCategoryId(userId, 1L);
		int categoryId2 = calCountUserCrownByCategoryId(userId, 2L);
		int categoryId3 = calCountUserCrownByCategoryId(userId, 3L);
		int categoryId4 = calCountUserCrownByCategoryId(userId, 4L);

		return categoryId1 + categoryId2 + categoryId3 + categoryId4;
	}

	public int calCountUserCrownByCategoryId(Long userId, Long categoryId) {
		int crownCnt = 0;
		//situationId들의 리스트 가져오기

		// List<Long> situationIdList = situationRepository.findSituationIdList(1L);
		List<Long> situationIdList = situationRepositoryImpl.findSituationList(categoryId);

		for (Long situationId : situationIdList) {
			if (Objects.equals(userRepository.countScriptBySituationId(situationId),
				userRepository.countScriptBySituationIdAndUserScriptPronounceOver2(situationId, userId))
				&& Objects.equals(userRepository.countQuizBySituationId(situationId),
				userRepository.countQuizBySituationIdAndUserQuizIsNowCorrected(situationId, userId))) {
				{
					crownCnt++;
				}
			}
		}

		return crownCnt;
	}

	public Long calCountUserViewedVideo(Long userId) {
		Long culture = userCultureRepository.countByUserId(userId);
		Long script = userScriptRepository.countByUserId(userId);

		return culture + script;
	}

	public Long calCountUserRecorded(Long userId) {
		return userScriptRepository.countUserRecord(userId);
	}

	public Long calCountUserStudiedQuiz(Long userId) {
		return userQuizRepository.countByUserId(userId);
	}

	public Double calAllUserPronounceAvg() {
		// return userQuizRepository.countBy();
		return userScriptRepository.avgByAllUserPronounce();
	}

	public Double calUserPronounceAvg(Long userId) {
		return userScriptRepository.avgByUserPronounce(userId);
	}

	public int calAllUserProgress(Long userId) {
		Long all = situationRepository.countBy() + cultureRepository.countBy() + quizRepository.countBy();
		Long user = userScriptRepository.countByUserId(userId) +
			userQuizRepository.countByUserId(userId) + userCultureRepository.countByUserId(userId);

		return (int)((user / all) * HUNDRED);
	}

	public int calUserProgress() {
		/*
		 * 유저 전체수를 알잖아.
		 * count(user_script) / (count(script)*count(user)) 다 더해서 곱하기 백
		 * */
		Long script = userScriptRepository.countBy() / (scriptRepository.countBy() * userRepository.countBy());
		Long quiz = userQuizRepository.countBy() / (quizRepository.countBy() * userRepository.countBy());
		Long culture = userCultureRepository.countBy() / (cultureRepository.countBy() * userRepository.count());

		return (int)((script + quiz + culture) * 100);
	}
}
