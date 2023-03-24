package com.a608.ddobagi.api.dto.respoonse;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SituationTransByCategoryResponse {
	String categoryName;
	String situationTitle;

}
