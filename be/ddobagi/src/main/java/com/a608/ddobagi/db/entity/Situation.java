package com.a608.ddobagi.db.entity;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

/**
 *packageName    : com.a608.ddobagi.entity
 * fileName       : Situation
 * author         : modsiw
 * date           : 2023/03/10
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/10        modsiw       최초 생성
 */
@Entity
public class Situation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String videoUrl;

	private String thumbnail;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "situation_id")
	private List<SituationTrans> situationTransList = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "situation_id")
	private List<Script> scriptList = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "situation_id")
	private List<Quiz> wordList = new ArrayList<>();
}
