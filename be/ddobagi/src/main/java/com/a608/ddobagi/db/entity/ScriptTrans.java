package com.a608.ddobagi.db.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class ScriptTrans {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String transContent;

	@Enumerated(EnumType.STRING)
	private Lang lang;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "script_id")
	private Script script;


	/* 연관관계 편의 메소드 */
	public void setScript(Script script) {
		if(this.script != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			this.script.getScriptTransList().remove(this);
		}
		this.script = script;
		script.getScriptTransList().add(this);
	}
}
