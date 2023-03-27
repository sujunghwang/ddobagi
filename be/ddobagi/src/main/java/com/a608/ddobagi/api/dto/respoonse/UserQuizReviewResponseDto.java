package com.a608.ddobagi.api.dto.respoonse;

import lombok.Data;

/**
 *packageName    : com.a608.ddobagi.api.dto.respoonse
 * fileName       : UserReviewDto
 * author         : modsiw
 * date           : 2023/03/21
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/21        modsiw       최초 생성
 */
@Data
public class UserQuizReviewResponseDto {

	private Long quizId;

	private String beforeSentence;

	private String afterSentence;

	private String answer;

	private String option1;

	private String option2;

	private String option3;

	public UserQuizReviewResponseDto(Long quizId, String beforeSentence, String afterSentence, String answer,
		String option1, String option2, String option3) {
		this.quizId = quizId;
		this.beforeSentence = beforeSentence;
		this.afterSentence = afterSentence;
		this.answer = answer;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
	}
}
