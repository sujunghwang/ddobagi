package com.a608.ddobagi.db.entity;

import java.io.Serializable;

import lombok.Getter;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Getter
public class CultureTrans implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;

	private String description;

	@Enumerated(EnumType.STRING)
	private Lang lang;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "culture_id")
	private Culture culture;


	/* 연관관계 편의 메소드 */
	public void setCulture(Culture culture) {
		if(this.culture != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			this.culture.getCultureTransList().remove(this);
		}
		this.culture = culture;
		culture.getCultureTransList().add(this);
	}
}
