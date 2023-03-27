package com.a608.ddobagi.db.entity;

import lombok.Getter;

import javax.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Category implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String common;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private List<CategoryTrans> categoryTransList;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private List<Situation> situationList = new ArrayList<>();
	/*
	SCHOOL,
	HOME,
	STORE,
	PLAYGROUND
	 */
}
