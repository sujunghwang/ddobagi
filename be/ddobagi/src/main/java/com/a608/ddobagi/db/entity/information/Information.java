package com.a608.ddobagi.db.entity.information;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Information implements Serializable {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;

	private String summary;

	private String url;

}
