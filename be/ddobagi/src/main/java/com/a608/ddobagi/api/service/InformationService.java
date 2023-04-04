package com.a608.ddobagi.api.service;

import java.util.List;
import java.util.stream.Collectors;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import com.a608.ddobagi.api.dto.respoonse.InformationResponseDto;
import com.a608.ddobagi.db.entity.information.Information;
import com.a608.ddobagi.db.repository.InformationRepository;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.service
 * fileName       : NewsService
 * author         : modsiw
 * date           : 2023/03/24
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/24        modsiw       최초 생성
 */

@Service
@RequiredArgsConstructor
public class InformationService {

	private final InformationRepository informationRepository;

	public List<InformationResponseDto> findAll() {
		List<Information> list = informationRepository.findAll();

		return list.stream()
			.map(InformationResponseDto::new)
			.collect(Collectors.toList());
	}

	public void addInformation(){
		try {
			String baseURL = "https://www.liveinkorea.kr/portal/KOR/board/mlbs";
			String commonURL = "?menuSeq=282&boardSeq=2&pageNo=";
			String listURL = "/boardList.do";
			String viewURL = "/boardView.do";

			StringBuilder sb_list = new StringBuilder();
			sb_list.append(baseURL).append(listURL).append(commonURL);

			StringBuilder sb_view = new StringBuilder();
			sb_view.append(baseURL).append(viewURL).append(commonURL);

			for (int i = 1; i <= 96 ; i++) {
				Document doc = Jsoup.connect(sb_list.toString()+i).get();
				Elements elements = doc.getElementsByClass("tbl_list_type1");
				for (Element element : elements) {
					StringBuilder view = new StringBuilder();
					view.append(sb_view);

					// title
					String title = element.getElementsByClass("title").text();
					// summary
					String summary = element.getElementsByClass("text").text();

					// url
					String temp = element.getElementsByTag("a").first().attr("href");
					temp = temp.substring(33, temp.length()-3);
					String temp_arr[] = temp.split("', '");
					String url = view.append("&groupNo=").append(temp_arr[1]).append("&conSeq=").append(temp_arr[0]).toString();
					informationRepository.save(new Information(title, summary, url));
				}
			}
		} catch (Exception e) {
			System.out.println("크롤링 실패 : " + e);
		}
	}
}
