package com.a608.ddobagi.api.controller;

import com.a608.ddobagi.api.service.CenterService;
import com.a608.ddobagi.api.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RequestMapping("/api/centers")
@RestController
public class CenterController {

    @Autowired
    private CenterService centerService;

    @GetMapping("/sido")
    public ResponseEntity<?> getSidoList() {
        // 시도 조회
        return ResponseEntity.ok(centerService.findSido());
    }

    @GetMapping("/gugun")
    public ResponseEntity<?> getGugunList(@RequestParam("sido") String sidoCode) {
        // 구군 조회
        return ResponseEntity.ok(centerService.findGugun(sidoCode));
    }

    @GetMapping()
    public ResponseEntity<?> getCenterList(@RequestParam(required = false) String sido, @RequestParam(required = false) String gugun) {
        // 센터 조회
        HashMap<String, Object> conditions = new HashMap<String, Object>();
        if (sido != null){
            // 시도로 조회했을 때
            conditions.put("sidoCode", sido);
        }else if(gugun != null){
            // 구군으로 조회했을 때
            conditions.put("gugunCode", gugun);
        }
        System.out.println(conditions);
        return ResponseEntity.ok(centerService.findCenter(conditions));
    }
}
