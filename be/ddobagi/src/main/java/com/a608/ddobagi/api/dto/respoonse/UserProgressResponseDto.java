package com.a608.ddobagi.api.dto.respoonse;

import lombok.Builder;
import lombok.Data;

/**
 *packageName    : com.a608.ddobagi.api.dto.respoonse
 * fileName       : UserProgressResponseDto
 * author         : modsiw
 * date           : 2023/03/21
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/21        modsiw       최초 생성
 */

@Data
public class UserProgressResponseDto {

	int viewedVideoCount;
	int recordedScriptCount;
	int studiedQuizCount;
	int crownCount;

	private int schoolCategoryProgress;
	private int homeCategoryProgress;
	private int storeCategoryProgress;
	private int playgroundCategoryProgress;

	private int scriptProgress;
	private int quizProgress;
	private int cultureProgress;

	@Builder
	public UserProgressResponseDto(int viewedVideoCount, int recordedScriptCount, int studiedQuizCount, int crownCount,
		int schoolCategoryProgress, int homeCategoryProgress, int storeCategoryProgress, int playgroundCategoryProgress,
		int scriptProgress, int quizProgress, int cultureProgress) {
		this.viewedVideoCount = viewedVideoCount;
		this.recordedScriptCount = recordedScriptCount;
		this.studiedQuizCount = studiedQuizCount;
		this.crownCount = crownCount;
		this.schoolCategoryProgress = schoolCategoryProgress;
		this.homeCategoryProgress = homeCategoryProgress;
		this.storeCategoryProgress = storeCategoryProgress;
		this.playgroundCategoryProgress = playgroundCategoryProgress;
		this.scriptProgress = scriptProgress;
		this.quizProgress = quizProgress;
		this.cultureProgress = cultureProgress;
	}
}
