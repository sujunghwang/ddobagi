package com.a608.ddobagi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DdobagiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DdobagiApplication.class, args);
	}

}
