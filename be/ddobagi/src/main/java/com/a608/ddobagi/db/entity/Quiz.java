package com.a608.ddobagi.db.entity;

import lombok.Getter;

import static javax.persistence.CascadeType.*;
import static javax.persistence.FetchType.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Getter
public class Quiz implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String beforeSentence;

	private String afterSentence;

	private String answer;

	private String option1;

	private String option2;

	private String option3;

	@JsonIgnore
	@OneToOne(fetch = LAZY, cascade = ALL) //일대일관계에서는 외래키를 어디에나 둬도 된다. 주로 액세스많이 하는곳에 하는걸 추천합니다.
	@JoinColumn(name = "script_id") //quiz를 저장할때 script도 persist해준다.
	private Script script;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "situation_id")
	private Situation situation;

	@OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
	private List<QuizTrans> quizTransList = new ArrayList<>();

	@OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
	private List<UserQuiz> userQuizList = new ArrayList<>();

	/* 연관관계 편의 메소드 */
	public void setSituation(Situation situation) {
		if(this.situation != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			this.situation.getQuizList().remove(this);
		}
		this.situation = situation;
		situation.getQuizList().add(this);
	}
}
