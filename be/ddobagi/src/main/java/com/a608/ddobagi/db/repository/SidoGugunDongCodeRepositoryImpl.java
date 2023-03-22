package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.api.dto.respoonse.GugunCodeResponseDto;
import com.a608.ddobagi.api.dto.respoonse.SidoCodeResponseDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.a608.ddobagi.db.entity.QSidoCode.sidoCode1;
import static com.a608.ddobagi.db.entity.QGugunCode.gugunCode1;

@Repository
public class SidoGugunDongCodeRepositoryImpl {

    @Autowired
    private JPAQueryFactory query;

    public List<SidoCodeResponseDto> selectSido(){
        // 시도 조회
        return query
                .select(Projections.constructor(SidoCodeResponseDto.class,
                        sidoCode1.sidoCode.substring(0,2), sidoCode1.sidoName))
                .from(sidoCode1)
                .orderBy(sidoCode1.sidoCode.asc())
                .fetch();
    }

    public List<GugunCodeResponseDto> selectGugun(String sidoCode) {
        // 시도코드로 구군 조회
        return query
                .select(Projections.constructor(GugunCodeResponseDto.class,
                        gugunCode1.gugunCode.substring(0, 5), gugunCode1.gugunName))
                .from(gugunCode1)
                .where(gugunCode1.gugunCode.substring(0,2).eq(sidoCode))
                .orderBy(gugunCode1.gugunCode.asc())
                .fetch();
    }
}
