package com.a608.ddobagi.security.dto;

import java.time.LocalDate;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.a608.ddobagi.db.entity.Lang;
import com.a608.ddobagi.db.entity.Role;
import com.a608.ddobagi.db.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// Request를 받을 때 쓰이는 dto다. UsernamePasswordAuthenticationToken를 반환하여
// 아이디와 비밀번호가 일치하는지 검증하는 로직을 넣을 수 있게 된다.

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRequestDto {
	private String loginId;
	private String pw;
	private String name;
	private String userLang;
	private LocalDate birth;
	// private int age;

	public User toEntity(PasswordEncoder passwordEncoder) {
		return User.builder()
			.loginId(loginId)
			.pw(passwordEncoder.encode(pw))
			.name(name)
			.userLang(Lang.valueOf(userLang))
			// .age(age)
			.birth(birth)
			.role(Role.ROLE_USER)
			.build();

	}

	public UsernamePasswordAuthenticationToken toAuthentication() {
		return new UsernamePasswordAuthenticationToken(loginId, pw);
	}


}