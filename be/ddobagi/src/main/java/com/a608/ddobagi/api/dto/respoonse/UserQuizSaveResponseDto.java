package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.api.dto.request.UserQuizSaveRequestDto;
import com.a608.ddobagi.db.entity.Quiz;
import com.a608.ddobagi.db.entity.User;
import com.a608.ddobagi.db.entity.UserQuiz;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
@AllArgsConstructor
public class UserQuizSaveResponseDto {

    private boolean isNowCorrected;

    private boolean isFirstCorrected;
}
