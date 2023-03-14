package com.a608.ddobagi.db.entity;

import static javax.persistence.CascadeType.*;
import static javax.persistence.FetchType.*;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Quiz {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne(fetch = LAZY, cascade = ALL) //일대일관계에서는 외래키를 어디에나 둬도 된다. 주로 액세스많이 하는곳에 하는걸 추천합니다.
	@JoinColumn(name = "script_id") //quiz를 저장할때 script도 persist해준다.
	private Script script;

	private String beforeSentence;

	private String afterSentence;

	private String answer;

	private String option1;

	private String option2;

	private String option3;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "quiz_id")
	private List<QuizTrans> quizTransList = new ArrayList<>();
}
