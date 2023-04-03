package com.a608.ddobagi.api.dto.respoonse;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SituationTransByCategoryResponseDto {
	String categoryName;
	String situationTitle;

}
