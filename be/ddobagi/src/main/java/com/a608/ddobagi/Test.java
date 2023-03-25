package com.a608.ddobagi;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Test {


	public static void main(String[] args) {
		String id = "6tgmz5VneUKGcGtNZO7h";
		String secret = "kdkFaj9aiI";

		try {
			NaverCrawler crawler = new NaverCrawler();
			String searchWord = URLEncoder.encode("다문화", "UTF-8");
			int display = 100;
			JSONObject response = crawler.search(id, secret, searchWord, display);
			System.out.println(response.toJSONString());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static class NaverCrawler {
		// 베이스 URL
		final String baseUrl = "https://openapi.naver.com/v1/search/news.json?query=";

		public JSONObject search(String clientId, String secret, String searchWord, int display) {
			HttpURLConnection con = null;
			JSONObject jsonObject = null;
			String result = "";

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

				List<JSONObject> list = (List<JSONObject>)jsonObject.get("items");

			} catch (Exception e) {
				System.out.println("연결 오류 : " + e);
			} finally {
				con.disconnect();
			}

			return jsonObject;
		}


		/**
		 * 결과를 읽는다
		 *
		 * @param body
		 * @return
		 */
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

