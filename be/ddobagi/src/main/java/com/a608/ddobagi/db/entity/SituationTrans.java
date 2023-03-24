package com.a608.ddobagi.db.entity;

import java.io.Serializable;

import lombok.Getter;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Getter
public class SituationTrans implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;

	private String description;

	@Enumerated(EnumType.STRING)
	private Lang lang;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "situation_id")
	private Situation situation;


	/* 연관관계 편의 메소드 */
	public void setSituation(Situation situation) {
		if(this.situation != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			this.situation.getSituationTransList().remove(this);
		}
		this.situation = situation;
		situation.getSituationTransList().add(this);
	}
}
