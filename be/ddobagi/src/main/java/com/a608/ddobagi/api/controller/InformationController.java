package com.a608.ddobagi.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.a608.ddobagi.api.service.InformationService;
import com.a608.ddobagi.common.ApiResponse;
import com.a608.ddobagi.db.entity.information.Information;

import lombok.RequiredArgsConstructor;

/**
 *packageName    : com.a608.ddobagi.api.controller
 * fileName       : NewsController
 * author         : modsiw
 * date           : 2023/03/24
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/24        modsiw       최초 생성
 */

@RestController
@RequestMapping("/api")
// @RequestMapping("/parents/information")
@RequiredArgsConstructor
public class InformationController {

	private final InformationService informationService;

	@GetMapping(value = "/parents/information")
	public ApiResponse<List<Information>> getInformationList() {
		return new ApiResponse<>(informationService.findAll());
	}

	// @PutMapping(value = "/api/parents/information")
	public void saveInformation(){
		informationService.addInformation();
	}

}
