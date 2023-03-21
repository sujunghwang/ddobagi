package com.a608.ddobagi.db.entity;

import lombok.Getter;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Getter
public class Script {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String defaultContent;

	private LocalTime startTime;

	private LocalTime endTime;

	@Enumerated(EnumType.STRING)
	private ScriptRole scriptRole;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "situation_id")
	private Situation situation;

	@OneToMany(mappedBy = "script", cascade = CascadeType.ALL)
//	@JoinColumn(name = "script_id")
	private List<ScriptTrans> scriptTransList = new ArrayList<>();

	@OneToMany(mappedBy = "script", cascade = CascadeType.ALL)
	private List<UserScript> userScriptList = new ArrayList<>();


	/* 연관관계 편의 메소드 */
	public void setSituation(Situation situation) {
		if(this.situation != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			this.situation.getScriptList().remove(this);
		}
		this.situation = situation;
		situation.getScriptList().add(this);
	}
}
