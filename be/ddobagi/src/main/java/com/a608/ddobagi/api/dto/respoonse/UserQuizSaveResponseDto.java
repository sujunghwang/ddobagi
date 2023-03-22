package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.api.dto.request.UserQuizSaveRequestDto;
import com.a608.ddobagi.db.entity.Quiz;
import com.a608.ddobagi.db.entity.User;
import com.a608.ddobagi.db.entity.UserQuiz;
import lombok.Builder;
import lombok.Data;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
public class UserQuizSaveResponseDto {

    private boolean isNowCorrected;

    private boolean isFirstCorrected;

    private User user;

    private Quiz quiz;

    public UserQuizSaveResponseDto(UserQuiz userQuiz) {
        this.isNowCorrected = userQuiz.isNowCorrected();
        this.isFirstCorrected = userQuiz.isFirstCorrected();
        this.user = userQuiz.getUser();
        this.quiz = userQuiz.getQuiz();
    }
}
