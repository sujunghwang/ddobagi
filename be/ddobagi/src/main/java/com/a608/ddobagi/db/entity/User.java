package com.a608.ddobagi.db.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class User extends BaseEntity implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String loginId;

	private String pw;

	private String name;

	//생년월일 추가
	private LocalDate birth;

	private int settleYear;

	@Enumerated(EnumType.STRING)
	private Lang userLang;

	private int age;

	@Enumerated(EnumType.STRING)
	private Role role;

	@Builder(toBuilder = true)
	public User(Long id, String loginId, String pw, String name,
		Lang userLang, LocalDate birth, int settleYear, Role role) {
		this.id = id;
		this.loginId = loginId;
		this.pw = pw;
		this.name = name;
		this.userLang = userLang;
		this.birth = birth;
		this.settleYear = settleYear;
		this.age = calAge(birth);
		this.role = role;
	}

	//== 비즈니스 로직==//

	public int calAge(LocalDate birth) {
		Calendar now = Calendar.getInstance(); //년월일시분초
		int currentYear = now.get(Calendar.YEAR);
		int userYear = birth.getYear();
		return currentYear - userYear;
	}
}
