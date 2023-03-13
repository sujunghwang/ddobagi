package com.a608.ddobagi.db.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class User extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String loginId;

	private String pw;

	private String name;

	@Enumerated(EnumType.STRING)
	private Lang userLang;

	private int age;

	@Enumerated(EnumType.STRING)
	private Role role;

	@Builder
	public User(String loginId, String pw, String name, Lang userLang, int age, Role role) {
		this.loginId = loginId;
		this.pw = pw;
		this.name = name;
		this.userLang = userLang;
		this.age = age;
		this.role = role;
	}
}
