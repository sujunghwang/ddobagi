package com.a608.ddobagi.db.entity;

import java.io.Serializable;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Getter
@NoArgsConstructor
public class UserScript implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String recordUrl;

	private float pronounce;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	@JsonIgnore
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

	public UserScript(String recordUrl, float pronounce, User user, Script script) {
		this.recordUrl = recordUrl;
		this.pronounce = pronounce;
		this.user = user;
		this.script = script;
	}

	public UserScript(Long id, String recordUrl, float pronounce, User user, Script script) {
		this.id = id;
		this.recordUrl = recordUrl;
		this.pronounce = pronounce;
		this.user = user;
		this.script = script;
	}
}
