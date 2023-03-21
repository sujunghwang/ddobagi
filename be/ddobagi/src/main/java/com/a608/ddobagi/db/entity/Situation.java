package com.a608.ddobagi.db.entity;


import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Getter
public class Situation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String thumbnail;

	private String videoUrl;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private Category category;

	@OneToMany(mappedBy = "situation", cascade = CascadeType.ALL)
//	@JoinColumn(name = "situation_id")
	private List<SituationTrans> situationTransList = new ArrayList<>();

	@OneToMany(mappedBy = "situation", cascade = CascadeType.ALL)
//	@JoinColumn(name = "situation_id")
	private List<Script> scriptList = new ArrayList<>();

	@OneToMany(mappedBy = "situation", cascade = CascadeType.ALL)
//	@JoinColumn(name = "situation_id")
	private List<Quiz> quizList = new ArrayList<>();


	/* 연관관계 편의 메소드 */
	public void setCategory(Category category) {
		if(this.category != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			this.category.getSituationList().remove(this);
		}
		this.category = category;
		category.getSituationList().add(this);
	}
}
