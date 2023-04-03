package com.a608.ddobagi.api.dto.respoonse.learning;

import com.a608.ddobagi.db.entity.Lang;
import lombok.Builder;
import lombok.Data;

@Data
public class SituationTransDto {
    Lang lang;
    String title;

    @Builder
    public SituationTransDto(Lang lang, String title) {
        this.lang = lang;
        this.title = title;
    }
}
