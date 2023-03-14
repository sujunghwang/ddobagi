package com.a608.ddobagi.db.entity;

import java.time.LocalTime;
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

@Entity
public class Script {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// @Column(name = "situation_id")
	// private Long situtationId;

	private LocalTime startTime;

	private LocalTime endTime;

	@Enumerated(EnumType.STRING)
	private ScriptRole scriptRole;

	private String defaultContent;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "script_id")
	private List<ScriptTrans> subScriptList = new ArrayList<>();

	@OneToMany(mappedBy = "script", cascade = CascadeType.ALL)
	private List<UserScript> userScriptList = new ArrayList<>();

}
