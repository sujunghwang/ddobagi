package com.a608.ddobagi;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableJpaAuditing
public class DdobagiApplication {

	public static final String APPLICATION_LOCATIONS = "spring.config.location="
		+ "classpath:application.yml,"
		+ "classpath:hidden.yml";

	public static void main(String[] args) {
		new SpringApplicationBuilder(DdobagiApplication.class)
			.properties(APPLICATION_LOCATIONS)
			.run(args);
	}
}
