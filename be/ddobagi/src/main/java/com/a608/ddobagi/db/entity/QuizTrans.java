package com.a608.ddobagi.db.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class QuizTrans {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String sentence;

	@Enumerated(EnumType.STRING)
	private Lang lang;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "quiz_id")
	private Quiz quiz;


	/* 연관관계 편의 메소드 */
	public void setQuiz(Quiz quiz) {
		if(this.quiz != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			this.quiz.getQuizTransList().remove(this);
		}
		this.quiz = quiz;
		quiz.getQuizTransList().add(this);
	}
}
