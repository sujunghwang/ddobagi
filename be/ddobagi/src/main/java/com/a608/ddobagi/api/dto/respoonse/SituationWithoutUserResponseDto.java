package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Lang;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class SituationWithoutUserResponseDto {
    Long situationId;
    String thumbnail;
    Lang lang;
    String title;

    @Builder
    public SituationWithoutUserResponseDto(Long situationId, String thumbnail, Lang lang, String title) {
        this.situationId = situationId;
        this.thumbnail = thumbnail;
        this.lang = lang;
        this.title = title;
    }
}
