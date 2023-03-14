package com.a608.ddobagi.db.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;


@Entity
public class Culture {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String videoUrl;

	private String thumbnail;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "culture_id")
	private List<CultureTrans> cultureTransList;
}
