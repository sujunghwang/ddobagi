package com.a608.ddobagi.db.entity;

import lombok.Getter;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;


@Entity
@Getter
public class Culture implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String videoUrl;

	private String thumbnail;

	@OneToMany(mappedBy = "culture", cascade = CascadeType.ALL)
	private List<CultureTrans> cultureTransList;
}
