package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.api.dto.respoonse.SidoCodeResponseDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.a608.ddobagi.db.entity.QSidoCode.sidoCode1;

@Repository
public class SidoGugunDongCodeRepositoryImpl {

    @Autowired
    private JPAQueryFactory query;

    public List<SidoCodeResponseDto> selectSido(){
        return query
                .select(Projections.fields(SidoCodeResponseDto.class,
                        sidoCode1.sidoCode, sidoCode1.sidoName))
                .from(sidoCode1)
                .orderBy(sidoCode1.sidoCode.asc())
                .fetch();
    }
}
