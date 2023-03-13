package com.a608.ddobagi.security.service;

import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.a608.ddobagi.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
	private final UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String loginId) throws UsernameNotFoundException {
		return userRepository.findByLoginId(loginId)
			.map(this::createUserDetails)
			.orElseThrow(() -> new UsernameNotFoundException(loginId + " 을 DB에서 찾을 수 없습니다"));
	}

	private UserDetails createUserDetails(com.a608.ddobagi.db.entity.User user) {
		GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(user.getRole().toString());

		return new User(
			String.valueOf(user.getId()),
			user.getPw(),
			Collections.singleton(grantedAuthority)
		);
	}
}