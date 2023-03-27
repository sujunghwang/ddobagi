package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.respoonse.CenterResponseDto;
import com.a608.ddobagi.api.dto.respoonse.GugunCodeResponseDto;
import com.a608.ddobagi.api.dto.respoonse.SidoCodeResponseDto;
import com.a608.ddobagi.db.repository.CenterRepositoryImpl;
import com.a608.ddobagi.db.repository.SidoGugunDongCodeRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CenterService {

    @Autowired
    private SidoGugunDongCodeRepositoryImpl sidoGugunDongCodeRepositoryImpl;

    @Autowired
    private CenterRepositoryImpl centerRepositoryImpl;

    public List<SidoCodeResponseDto> findSido() {
        // 시도 조회
        return sidoGugunDongCodeRepositoryImpl.selectSido();
    }

    public List<GugunCodeResponseDto> findGugun(String sidoCode) {
        // 구군 조회
        return sidoGugunDongCodeRepositoryImpl.selectGugun(sidoCode);
    }

    public List<CenterResponseDto> findCenter(Map<String, Object> conditions){
        // 코드로 센터 조회
        return centerRepositoryImpl.selectCenters(conditions);
    }
}
