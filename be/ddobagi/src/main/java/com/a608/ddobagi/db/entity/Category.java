package com.a608.ddobagi.db.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 *packageName    : com.a608.ddobagi.entity
 * fileName       : Category
 * author         : modsiw
 * date           : 2023/03/10
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/10        modsiw       최초 생성
 */
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
