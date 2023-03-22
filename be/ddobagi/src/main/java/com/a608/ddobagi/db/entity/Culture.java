package com.a608.ddobagi.db.entity;

import lombok.Getter;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Getter
public class Culture implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String videoUrl;

	private String thumbnail;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "culture_category_id")
	private CultureCategory cultureCategory;

	@OneToMany(mappedBy = "culture", cascade = CascadeType.ALL)
	private List<CultureTrans> cultureTransList;
}
