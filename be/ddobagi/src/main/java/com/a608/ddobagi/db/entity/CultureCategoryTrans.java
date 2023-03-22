package com.a608.ddobagi.db.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;

/**
 *packageName    : com.a608.ddobagi.db.entity
 * fileName       : CultureCategoryTrans
 * author         : modsiw
 * date           : 2023/03/22
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */

@Entity
@Getter
public class CultureCategoryTrans implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Enumerated(EnumType.STRING)
	private Lang lang;

	private String category_name;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "culture_category_id")
	private CultureCategory cultureCategory;


	/* 연관관계 편의 메소드 */
	public void setCategory(CultureCategory cultureCategory) {
		if(this.cultureCategory != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			// 이 부분에서 기존에 category와 연관관계가 있다면
			// category에서 해당 categoryTrans를 먼저 제거.
			this.cultureCategory.getCultureCategoryTransList().remove(this);
		}
		// 해당 categoryTrans Entity에 파라미터로 들어온 category 연관 관계 설정
		this.cultureCategory = cultureCategory;
		// 파라미터로 들어온 category Entity에 categoryTrans 연관 관계 설정
		cultureCategory.getCultureCategoryTransList().add(this);
	}
}
