package com.a608.ddobagi.api.dto.request;

import java.time.LocalDate;

import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.dto.request
 * fileName       : UserUpdateRequestDto
 * author         : modsiw
 * date           : 2023/03/20
 * description    : 마이페이지 정보 수정시 데이터를 받아오는 dto
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/20        modsiw       최초 생성
 */

@Data
@RequiredArgsConstructor
public class UserUpdateRequestDto {

	private String name;
	private LocalDate birth;
	private String userLang;
	private String pw;

}
