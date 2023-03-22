package com.a608.ddobagi.db.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Getter;

/**
 *packageName    : com.a608.ddobagi.db.entity
 * fileName       : CultureCategory
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
public class CultureCategory implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String common;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private List<CultureCategoryTrans> cultureCategoryTransList;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private List<Culture> cultureList = new ArrayList<>();

	/*
	ART,
	ANNIVERSARY,
	TRADITION,
	PLAY
	 */
}
