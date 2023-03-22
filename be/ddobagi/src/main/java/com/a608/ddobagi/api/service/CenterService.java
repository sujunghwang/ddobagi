package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.respoonse.SidoCodeResponseDto;
import com.a608.ddobagi.db.entity.Situation;
import com.a608.ddobagi.db.repository.SidoGugunDongCodeRepositoryImpl;
import com.a608.ddobagi.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CenterService {

    @Autowired
    SidoGugunDongCodeRepositoryImpl sidoGugunDongCodeRepositoryImpl;

    public List<SidoCodeResponseDto> findSido() {
        // 시도 코드 조회
        return sidoGugunDongCodeRepositoryImpl.selectSido();
    }
}
