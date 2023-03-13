package com.a608.ddobagi.db.entity;

import javax.persistence.*;

@Entity
public class CategoryTrans {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// @Column(name = "culture_id")
	// private Long cultureId;

	private String category_name;

	@Enumerated(EnumType.STRING)
	private Lang lang;
}
