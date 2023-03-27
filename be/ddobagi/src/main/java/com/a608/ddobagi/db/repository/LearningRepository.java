package com.a608.ddobagi.db.repository;

import java.util.List;

import com.a608.ddobagi.api.dto.respoonse.learning.SituationContentByCategoryQueryDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.a608.ddobagi.db.entity.Script;
import org.springframework.data.repository.query.Param;

public interface LearningRepository extends JpaRepository<Script, Long> {
    @Query("SELECT new com.a608.ddobagi.api.dto.respoonse.learning.SituationContentByCategoryQueryDto(" +
            "si.id, si.thumbnail, st.lang, st.title, " +
            "       SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END), " +
            "       COUNT(DISTINCT sc.id), " +
            "       SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END), " +
            "       COUNT(DISTINCT q.id), " +
            "       CASE WHEN COUNT(DISTINCT sc.id) = SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) " +
            "                 AND COUNT(DISTINCT q.id) = SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) " +
            "            THEN true ELSE false END, " +
            "       ((SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END)/COUNT(DISTINCT sc.id)) " +
            "            + SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END)/COUNT(DISTINCT q.id)) * 100 * 0.5) " +
            "FROM Category c " +
            "INNER JOIN Situation si ON c.id = si.category.id " +
            "INNER JOIN SituationTrans st ON si.id = st.situation.id " +
            "LEFT JOIN Script sc ON sc.situation.id = si.id " +
            "LEFT JOIN UserScript us ON us.script.id = sc.id AND us.user.id = :userId " +
            "LEFT JOIN Quiz q ON q.situation.id = si.id AND q.script.id = sc.id " +
            "LEFT JOIN UserQuiz uq ON uq.quiz.id = q.id AND uq.user.id = :userId " +
            "WHERE c.common = :categoryCommon " +
            "GROUP BY si.id, si.thumbnail, st.lang, st.title")
    public List<SituationContentByCategoryQueryDto> getSituationListByCategory(@Param("userId") Long userId1, @Param("userId") Long userId2, @Param("categoryCommon") String categoryCommon);
}
