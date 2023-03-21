package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Lang;
import lombok.Getter;

import java.time.LocalTime;

@Getter
public class QuizResponseDto {

    private Lang lang;

    private String beforeSentence;

    private String afterSentence;

    private String answer;

    private String option1;

    private String option2;

    private String option3;

    private String defaultContent;

    private LocalTime startTime;

    private LocalTime endTime;

    private String transContent;
}
