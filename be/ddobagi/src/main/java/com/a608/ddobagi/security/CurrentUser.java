package com.a608.ddobagi.security;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

/**
 *packageName    : com.a608.ddobagi.security
 * fileName       : CurrentUser
 * author         : modsiw
 * date           : 2023/03/22
 * description    : 현재 유저를 가져오는 custom annotation
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/22        modsiw       최초 생성
 */

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.PARAMETER)
@Documented
@AuthenticationPrincipal
public @interface CurrentUser {

}
