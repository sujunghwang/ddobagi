package com.a608.ddobagi.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Getter
public class UserScript {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String recordUrl;

	private float pronounce;

//	@Column(name = "user_id")
//	private Long userId;
//
//	@Column(name = "script_id")
//	private Long scriptId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "script_id")
	private Script script;

	/* 연관관계 편의 메소드 */
	public void setScript(Script script) {
		if(this.script != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			this.script.getUserScriptList().remove(this);
		}
		this.script = script;
		script.getUserScriptList().add(this);
	}
}
