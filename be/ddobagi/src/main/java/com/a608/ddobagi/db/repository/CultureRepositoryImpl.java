package com.a608.ddobagi.db.repository;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.a608.ddobagi.api.dto.respoonse.culture.CheckUserViewedVideoDto;
import com.a608.ddobagi.api.dto.respoonse.culture.CultureCategoryResponseDto;
import com.a608.ddobagi.api.dto.respoonse.culture.CultureContentDto;
import com.a608.ddobagi.api.dto.respoonse.culture.CultureContentQueryDto;
import com.a608.ddobagi.db.entity.CultureCategoryTrans;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.db.repository
 * fileName       : CultureRepositoryImpl
 * author         : modsiw
 * date           : 2023/03/22
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */
@Repository
@RequiredArgsConstructor
public class CultureRepositoryImpl {

	private final EntityManager em;

	//카테고리 이름에 따라 카테고리 이름 가져오기
	public List<CultureCategoryResponseDto> findCultureCategories(String cultureCategoryCommon) {
		return em.createQuery(
				"select new com.a608.ddobagi.api.dto.respoonse.culture.CultureCategoryResponseDto"
					+ "(cc.id, cct.lang, cct.categoryName)"
					+ " from CultureCategory cc"
					+ " join CultureCategoryTrans cct"
					+ " on cc.id = cct.cultureCategory.id"
					+ " where cc.common = :common", CultureCategoryResponseDto.class)
			.setParameter("common", cultureCategoryCommon)
			.getResultList();
	}

	//카테고리 별 내용 리스트 가져오기
	public List<CultureContentDto> findCultureContentByDto_optimization(Long userId, String cultureCategoryCommon) {

		List<CultureContentDto> result =
			findCultureContents(userId, cultureCategoryCommon);

		// System.out.println("===========카테고리 내용 리스트============");
		// System.out.println(result.size());

		Map<Long, List<CultureContentQueryDto>> cultureContentMap = findCultureContentMap(toCultureIds(result));
		// Map<Long, List<CheckUserViewedVideoDto>> longListMap = checkUserViewdVideo(toCultureIds(result));
		// System.out.println("===========user 시청 여부 내용 리스트============");
		// System.out.println(longListMap.size());

		result.forEach(c -> c.setCultureContentQueryDtoList(cultureContentMap.get(c.getCultureId())));
		// result.forEach(uc -> uc.setCompleted(cultureRepository.isCompleted(userId, uc.getCultureId())));
		// System.out.println(result.get(0).isCompleted());
		return result;

	}

	//해당 카테고리에 있는 컬쳐 컨텐츠 아이디들만 뽑아오기
	public List<Long> toCultureIds(List<CultureContentDto> result) {
		return result.stream()
			.map(c -> c.getCultureId())
			.collect(Collectors.toList());
	}

	//카테고리 내용 공통 속성 가져오기
	public List<CultureContentDto> findCultureContents(Long userId, String cultureCategoryCommon) {
		return em.createQuery(
				"select new com.a608.ddobagi.api.dto.respoonse.culture.CultureContentDto"
					+ "(c.id, c.thumbnail,"
					+ " case when uc.isCompleted = true then true else false end)"
					+ " from Culture c"
					+ " left outer join UserCulture uc"
					+ " on c.id = uc.culture.id and uc.user.id =:userId"
					+ " left join CultureCategory cc"
					+ " on c.cultureCategory.id = cc.id"
					+ " where"
					// + " uc.user.id = :userId and"
					+ " cc.common = :common", CultureContentDto.class)
			.setParameter("userId", userId)
			.setParameter("common", cultureCategoryCommon)
			.getResultList();
	}

	//컬쳐id에 따라 포함된 컬쳐 컨텐츠 리스트 가져오기
	public Map<Long, List<CultureContentQueryDto>> findCultureContentMap(List<Long> cultureIds) {

		List<CultureContentQueryDto> cultureContent = em.createQuery(
				"select new com.a608.ddobagi.api.dto.respoonse.culture.CultureContentQueryDto"
					+ "(ct.culture.id, ct.lang, ct.title, ct.description)"
					+ " from CultureTrans ct"
					+ " join Culture c"
					+ " on ct.culture.id = c.id"
					+ " where ct.culture.id in :cultureIds", CultureContentQueryDto.class)
			.setParameter("cultureIds", cultureIds)
			.getResultList();

		return cultureContent.stream()
			.collect(Collectors.groupingBy(CultureContentQueryDto::getCultureId));
	}

	//user가 봤는지 안봤는지 확인
	public Map<Long, List<CheckUserViewedVideoDto>> checkUserViewdVideo(List<Long> cultureIds) {
		List<CheckUserViewedVideoDto> result =  em.createQuery(
				"select new com.a608.ddobagi.api.dto.respoonse.culture.CheckUserViewedVideoDto"
					+ "(c.id, coalesce(uc.isCompleted, false))"
					+ " from UserCulture uc"
					+ " join Culture c"
					+ " on uc.culture.id = c.id"
					+ " where uc.culture.id in :cultureIds", CheckUserViewedVideoDto.class)
			.setParameter("cultureIds", cultureIds)
			.getResultList();

		return result.stream()
			.collect(Collectors.groupingBy(CheckUserViewedVideoDto::getCultureId));

	}



	// === sql 그냥 조회 === //
	/*
	public List<CultureCategoryResponseDto> findCultureCategoryGroupByCategoryName(String cultureCategoryCommon) {

		return em.createQuery("select cct.lang, cct.category_name"
			+ " from CultureCategory cc"
			+ " join CultureCategoryTrans cct"
			+ " on cc.id = cct.cultureCategory.id"
			+ " where cc.common = :common"
			+ " order by cc.id", CultureCategoryResponseDto.class)
			.setParameter("common", cultureCategoryCommon)
			.getResultList();
	}

	public List<CultureDetailResponseDto> findCultureCategoryContentsGroupByCategoryName
		(Long userId, String cultureCategoryCommon) {

		return em.createQuery(
			"select cc.id, cc.common, c.id, c.thumbnail, uc.isCompleted,"
				+ " ct.lang, ct.title, ct.description"
				+ " from Culture c"
				+ " join CultureCategory cc"
				+ " on c.cultureCategory.id = cc.id"
				+ " left outer join UserCulture uc"
				+ " on c.id = uc.culture.id"
				+ " join CultureTrans ct"
				+ " on c.id = ct.culture.id"
				+ " where uc.user.id = :userId"
				+ " and cc.common = :common"
				+ " order by cc.id", CultureDetailResponseDto.class)
			.setParameter("userId", userId)
			.setParameter("common", cultureCategoryCommon)
			.getResultList();
	} */

}
