package com.a608.ddobagi.db.entity;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String common;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
//	@JoinColumn(name = "category_id")
	private List<CategoryTrans> categoryTransList;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
//	@JoinColumn(name = "category_id")
	private List<Situation> situationList = new ArrayList<>();
	/*
	SCHOOL,
	HOME,
	STORE,
	PLAYGROUND
	 */


	/* 연관관계 편의 메소드 */
//	public void addCategoryTrans(CategoryTrans categoryTrans) {
//		this.categoryTransList.add(categoryTrans);
//		if (categoryTrans.getCategory() != this) {
//			categoryTrans.setCategory(this);
//		}
//	}

}
