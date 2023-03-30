package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Lang;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.apache.logging.log4j.util.StringMap;

import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

@Data
public class QuizResponseDto {

    private String beforeSentence;

    private String afterSentence;

    private String answer;

    private String option1;

    private String option2;

    private String option3;

    private String defaultContent;

    private Long startTime;

    private Long endTime;

    private Map<Lang, Map<String,String>> lang = new HashMap<>();

    private boolean isNowCorrected;

    private boolean isFirstCorrected;

    private boolean isSolved;

    public QuizResponseDto(String beforeSentence, String afterSentence, String answer, String option1, String option2, String option3,
                                   String defaultContent, Long startTime, Long endTime, boolean isNowCorrected, boolean isFirstCorrected, boolean isSolved) {
        this.beforeSentence = beforeSentence;
        this.afterSentence = afterSentence;
        this.answer = answer;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.defaultContent = defaultContent;
        this.startTime = startTime;
        this.endTime = endTime;
        this.isNowCorrected = isNowCorrected;
        this.isFirstCorrected = isFirstCorrected;
        this.isSolved = isSolved;
    }

}
