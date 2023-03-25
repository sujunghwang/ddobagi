package com.a608.ddobagi.db.entity.information;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
public class News implements Serializable {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;

	private String summary;

	private LocalDate publishedDate;

	private String url;

	public News(String title, String summary, LocalDate publishedDate, String url) {
		this.title = title;
		this.summary = summary;
		this.publishedDate = publishedDate;
		this.url = url;
	}
}
