package com.a608.ddobagi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;

import lombok.Getter;

@Configuration
@Getter
public class NaverConfig {

    @Value("${naver.client.id}")
    private String clientID;

    @Value("${naver.client.secret}")
    private String clientSecret = "mw+9Cr2fDSIlN6nLSoNkj/1YACouZMIhDpOIujNJ";

}
