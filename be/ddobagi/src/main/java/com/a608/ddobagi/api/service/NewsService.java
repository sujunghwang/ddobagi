package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.respoonse.NewsResponseDto;
import com.a608.ddobagi.config.NaverConfig;
import com.a608.ddobagi.db.entity.information.News;
import com.a608.ddobagi.db.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
public class NewsService {

	private final NewsRepository newsRepository;
	private final NaverConfig naverConfig;

	public List<NewsResponseDto> findAll() {
		List<News> list = newsRepository.findAll();
		return list.stream()
			.map(NewsResponseDto::new)
			.collect(Collectors.toList());
	}

	public void addNews(){

		String id = naverConfig.getClientID();
		String secret = naverConfig.getClientSecret();
		Map<String, String> month = new HashMap<>();
		month.put("Jan", "01");
		month.put("Feb", "02");
		month.put("Mar", "03");
		month.put("Apr", "04");
		month.put("May", "05");
		month.put("Jun", "06");
		month.put("Jul", "07");
		month.put("Aug", "08");
		month.put("Sep", "09");
		month.put("Oct", "10");
		month.put("Nov", "11");
		month.put("Dec", "12");

		try {
			NaverCrawler crawler = new NaverCrawler();
			String searchWord = URLEncoder.encode("다문화", "UTF-8");
			int display = 100;
			List<JSONObject> items = crawler.search(id, secret, searchWord, display);
			for (JSONObject item : items) {
				System.out.println(item.toJSONString());
				String title = item.get("title").toString();
				String desc = item.get("description").toString();
				String[] dateString = item.get("pubDate").toString().split(" ");
				LocalDate publishedDate = LocalDate.parse(dateString[3]+"-"+month.get(dateString[2])+"-"+dateString[1], DateTimeFormatter.ofPattern("yyyy-MM-dd"));
				String url = item.get("link").toString();
				newsRepository.save(new News(title, desc, publishedDate, url));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static class NaverCrawler {
		// 베이스 URL
		final String baseUrl = "https://openapi.naver.com/v1/search/news.json?query=";

		public List<JSONObject> search(String clientId, String secret, String searchWord, int display) {
			HttpURLConnection con = null;
			JSONObject jsonObject = null;
			List<JSONObject> list = null;

			try {
				URL url = new URL(baseUrl + searchWord + "&display=100&sort=date");
				con = (HttpURLConnection) url.openConnection();

				con.setRequestMethod("GET");
				con.setRequestProperty("X-Naver-Client-Id", clientId);
				con.setRequestProperty("X-Naver-Client-Secret", secret);

				InputStream is = con.getInputStream();
				String responBody = readBody(is);

				JSONParser parser = new JSONParser();
				jsonObject = (JSONObject) parser.parse(responBody);

				list = (List<JSONObject>)jsonObject.get("items");

			} catch (Exception e) {
				System.out.println("연결 오류 : " + e);
			} finally {
				con.disconnect();
			}

			return list;
		}

		public String readBody(InputStream body){

			InputStreamReader streamReader = new InputStreamReader(body);

			try (BufferedReader lineReader = new BufferedReader(streamReader)) {
				StringBuilder responseBody = new StringBuilder();

				String line;
				while ((line = lineReader.readLine()) != null) {
					responseBody.append(line);
				}

				return responseBody.toString();
			} catch (IOException e) {
				throw new RuntimeException("API 응답을 읽는데 실패했습니다.", e);
			}
		}
	}
}
