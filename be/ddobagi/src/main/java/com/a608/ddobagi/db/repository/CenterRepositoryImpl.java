package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.api.dto.respoonse.CenterResponseDto;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

import static com.a608.ddobagi.db.entity.QCenter.center;

@Repository
public class CenterRepositoryImpl {

    @Autowired
    private JPAQueryFactory query;

    public List<CenterResponseDto> selectCenters(Map<String, Object> conditions){
        // 코드와 함께 조회
        return query
                .select(Projections.fields(CenterResponseDto.class,
                        center.type,
                        center.zipCode,
                        center.address,
                        center.Latitude,
                        center.Longitude,
                        center.tel)
                ).from(center)
                .where(containCode(conditions))
                .fetch();
    }

    private BooleanExpression containCode(Map<String, Object> conditions){

        if(!conditions.isEmpty()) {
            if(conditions.containsKey("sidoCode")){
                // sido코드가 존재할 때
                String keyword = (String) conditions.get("sidoCode");
                return center.sido.substring(0,2).eq(keyword);
            }
            else{
                System.out.println(conditions.containsKey("gugunCode"));
                // gugun코드가 존재할 때
                String keyword = (String) conditions.get("gugunCode");
                return center.gugun.substring(0, 5).eq(keyword);
            }
        }
        return null;
    }
}
