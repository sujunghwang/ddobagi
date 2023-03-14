package com.a608.ddobagi.db.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String common;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "category_id")
	private List<CategoryTrans> categoryTransList;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "category_id")
	private List<Situation> situationList = new ArrayList<>();
	/*
	SCHOOL,
	HOME,
	STORE,
	PLAYGROUND
	 */
}
