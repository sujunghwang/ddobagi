package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.respoonse.CenterResponseDto;
import com.a608.ddobagi.api.dto.respoonse.GugunCodeResponseDto;
import com.a608.ddobagi.api.dto.respoonse.SidoCodeResponseDto;
import com.a608.ddobagi.api.dto.respoonse.UserResponseDto;
import com.a608.ddobagi.db.entity.Center;
import com.a608.ddobagi.db.entity.Situation;
import com.a608.ddobagi.db.repository.CenterRepository;
import com.a608.ddobagi.db.repository.SidoGugunDongCodeRepositoryImpl;
import com.a608.ddobagi.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CenterService {

    @Autowired
    private SidoGugunDongCodeRepositoryImpl sidoGugunDongCodeRepositoryImpl;
    @Autowired
    private CenterRepository centerRepository;

    public List<SidoCodeResponseDto> findSido() {
        // 시도 조회
        return sidoGugunDongCodeRepositoryImpl.selectSido();
    }

    public List<GugunCodeResponseDto> findGugun(String sidoCode) {
        // 구군 조회
        return sidoGugunDongCodeRepositoryImpl.selectGugun(sidoCode);
    }

    public List<CenterResponseDto> findCenter(String gugunName){
        // 구군이름으로 센터 조회
        List<Center> centerList = centerRepository.findCentersByGugun(gugunName);

        // responseDto에 담기
        List<CenterResponseDto> collect = centerList.stream()
                .map(CenterResponseDto::new)
                .collect(Collectors.toList());

        return collect;
    }
}
