package com.a608.ddobagi.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

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

	public List<Information> findAll() {
		return informationRepository.findAll();
	}
}
