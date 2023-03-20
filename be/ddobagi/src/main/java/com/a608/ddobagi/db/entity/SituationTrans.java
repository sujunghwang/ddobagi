package com.a608.ddobagi.db.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *packageName    : com.a608.ddobagi.entity
 * fileName       : SituationTrans
 * author         : modsiw
 * date           : 2023/03/10
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/10        modsiw       최초 생성
 */
@Entity
public class SituationTrans {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// @ManyToOne(fetch = FetchType.LAZY)
	// @JoinColumn(name = "situation_id")
	// private Situation situation;

	// private Long situationId;

	private String title;

	private String description;

	@Enumerated(EnumType.STRING)
	private Lang lang;
}
