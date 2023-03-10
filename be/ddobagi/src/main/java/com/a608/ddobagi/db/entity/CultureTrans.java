package com.a608.ddobagi.db.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *packageName    : com.a608.ddobagi.entity
 * fileName       : CultureTrans
 * author         : modsiw
 * date           : 2023/03/10
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/10        modsiw       최초 생성
 */

@Entity
public class CultureTrans {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// @Column(name = "culture_id")
	// private Long cultureId;

	private String title;

	private String description;

	@Enumerated(EnumType.STRING)
	private Lang lang;

}
