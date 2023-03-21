package com.a608.ddobagi.db.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class CategoryTrans {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Enumerated(EnumType.STRING)
	private Lang lang;

	private String category_name;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private Category category;


	/* 연관관계 편의 메소드 */
	public void setCategory(Category category) {
		if(this.category != null) {
			// 다대일측에서 연관관계를 지정할 때 기존 연관관계는 끊어주어야 한다.
			// 이 부분에서 기존에 category와 연관관계가 있다면
			// category에서 해당 categoryTrans를 먼저 제거.
			this.category.getCategoryTransList().remove(this);
		}
		// 해당 categoryTrans Entity에 파라미터로 들어온 category 연관 관계 설정
		this.category = category;
		// 파라미터로 들어온 category Entity에 categoryTrans 연관 관계 설정
		category.getCategoryTransList().add(this);

//		// 이부분이 없으면 무한 루프에 걸린다.
//		if(!category.getCategoryTransList().contains(this)) {
//			category.addCategoryTrans(this);
//		}
	}
}
