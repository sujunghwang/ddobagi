package com.a608.ddobagi.db.entity;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class UserQuiz implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private boolean isNowCorrected;

	private boolean isFirstCorrected;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "quiz_id")
	private Quiz quiz;

	@Builder(toBuilder = true)
	public UserQuiz(Long id, boolean isNowCorrected, boolean isFirstCorrected, User user, Quiz quiz) {
		this.id = id;
		this.isNowCorrected = isNowCorrected;
		this.isFirstCorrected = isFirstCorrected;
		this.user = user;
		this.quiz = quiz;
	}
}
