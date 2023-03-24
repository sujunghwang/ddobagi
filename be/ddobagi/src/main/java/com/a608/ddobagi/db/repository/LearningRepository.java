package com.a608.ddobagi.db.repository;

import java.util.List;

import com.a608.ddobagi.api.dto.respoonse.SituationByCategoryResponseDto;
import com.a608.ddobagi.api.dto.respoonse.SituationWithUserResponseDto;
import com.a608.ddobagi.api.dto.respoonse.SituationWithoutUserResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.a608.ddobagi.db.entity.Script;
import org.springframework.data.repository.query.Param;

public interface LearningRepository extends JpaRepository<Script, Long> {

//    @Query("SELECT si.id, si.thumbnail, st.lang, st.title, CASE WHEN (COUNT(DISTINCT sc.id) = 0 OR COUNT(DISTINCT q.id) = 0) THEN 0 ELSE ROUND((SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) / COUNT(DISTINCT sc.id) + SUM(CASE WHEN uq.isNowCorrected = 1 THEN 1 ELSE 0 END) / COUNT(DISTINCT q.id)) * 100 * 1/2, 1) END as progress, CASE WHEN (COUNT(DISTINCT sc.id) = 0 OR COUNT(DISTINCT q.id) = 0) THEN false ELSE (COUNT(DISTINCT sc.id) = SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) AND COUNT(DISTINCT q.id) = SUM(CASE WHEN uq.isNowCorrected = 1 THEN 1 ELSE 0 END)) END as is_completed, SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) as completed_scripts, COUNT(DISTINCT sc.id) as total_scripts, SUM(CASE WHEN uq.isNowCorrected = 1 THEN 1 ELSE 0 END) as completed_quizzes, COUNT(DISTINCT q.id) as total_quizzes FROM Category c INNER JOIN c.situations si INNER JOIN si.translations st LEFT JOIN si.scripts sc LEFT JOIN sc.userScripts us WITH us.user.id = 1 LEFT JOIN si.quizzes q LEFT JOIN q.userQuizs uq WITH uq.userI = 1 WHERE c.common = 'SCHOOL' GROUP BY si.id, si.thumbnail, st.lang, st.title")
//    @Query("SELECT si.id, si.thumbnail, st.lang, st.title, temp.isCompleted, temp.completedScripts, temp.totalScripts, temp.completedQuizzes, temp.totalQuizzes, ROUND((temp.completedScripts/temp.totalScripts + temp.completedQuizzes/temp.totalQuizzes) * 100 * 1/2, 1) as progress FROM Category c INNER JOIN c.situations si INNER JOIN si.translations st INNER JOIN (SELECT s.category.id AS categoryId, s.id AS situationId, SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) AS completedScripts, COUNT(DISTINCT scr.id) AS totalScripts, SUM(CASE WHEN uq.isNowCorrected = 1 THEN 1 ELSE 0 END) AS completedQuizzes, COUNT(DISTINCT q.id) AS totalQuizzes, CASE WHEN COUNT(DISTINCT scr.id) = SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) AND COUNT(DISTINCT q.id) = SUM(CASE WHEN uq.isNowCorrected = 1 THEN 1 ELSE 0 END) THEN true ELSE false END AS isCompleted FROM Situation s LEFT JOIN s.scripts scr LEFT JOIN scr.userScripts us WITH us.user.id = :userId LEFT JOIN s.quizzes q LEFT JOIN q.userQuizzes uq WITH uq.user.id = :userId GROUP BY s.id) temp ON c.id = temp.categoryId AND si.id = temp.situationId WHERE c.common = :categoryCommon")
//    @Query("SELECT si.id, si.thumbnail, st.lang, st.title, " +
//            "  CASE WHEN (COUNT(DISTINCT sc.id) = 0 OR COUNT(DISTINCT q.id) = 0) " +
//            "       THEN 0 " +
//            "       ELSE ROUND((SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) / COUNT(DISTINCT sc.id) + SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) / COUNT(DISTINCT q.id)) * 100 * 1/2, 1) " +
//            "  END as progress, " +
//            "  CASE WHEN (COUNT(DISTINCT sc.id) = 0 OR COUNT(DISTINCT q.id) = 0) " +
//            "       THEN 0 " +
//            "       ELSE (COUNT(DISTINCT sc.id) = SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) AND COUNT(DISTINCT q.id) = SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END)) " +
//            "  END as is_completed, " +
//            "  SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) as completed_scripts, " +
//            "  COUNT(DISTINCT sc.id) as total_scripts, " +
//            "  SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) as completed_quizzes, " +
//            "  COUNT(DISTINCT q.id) as total_quizzes " +
//            "FROM Category c " +
//            "INNER JOIN c.situationList si " +
//            "INNER JOIN si.situationTransList st " +
//            "LEFT JOIN si.scriptList sc " +
//            "LEFT JOIN sc.userScriptList us WITH us.user.id = :userId " +
//            "LEFT JOIN si.quizList q LEFT JOIN q.userQuizList uq WITH uq.user.id = :userId " +
//            "WHERE c.common = :categoryCommon " +
//            "GROUP BY si.id, si.thumbnail, st.lang, st.title")
//    @Query("SELECT si.id, si.thumbnail, st.lang, st.title, CASE WHEN (COUNT(DISTINCT sc.id) = 0 OR COUNT(DISTINCT q.id) = 0) THEN 0 ELSE ROUND((SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) / COUNT(DISTINCT sc.id) + SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) / COUNT(DISTINCT q.id)) * 100 * 1/2, 1) END as progress, CASE WHEN (COUNT(DISTINCT sc.id) = 0 OR COUNT(DISTINCT q.id) = 0) THEN false ELSE (COUNT(DISTINCT sc.id) = SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) AND COUNT(DISTINCT q.id) = SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END)) END as is_completed, SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) as completed_scripts, COUNT(DISTINCT sc.id) as total_scripts, SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) as completed_quizzes, COUNT(DISTINCT q.id) as total_quizzes FROM Category c INNER JOIN c.situationList si INNER JOIN si.situationTransList st LEFT JOIN si.scriptList sc LEFT JOIN sc.userScriptList us WITH us.user.id = :userId LEFT JOIN si.quizList q LEFT JOIN q.userQuizList uq WITH uq.user.id = :userId WHERE c.common = :categoryCommon GROUP BY si.id, si.thumbnail, st.lang, st.title")
    @Query("SELECT new com.a608.ddobagi.api.dto.respoonse.SituationByCategoryResponseDto(" +
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
////    @Query("SELECT si.id, si.thumbnail, st.lang, st.title, SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) AS completed_scripts, COUNT(DISTINCT script.id) AS total_scripts, SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) AS completed_quizzes, COUNT(DISTINCT quiz.id) AS total_quizzes, CASE WHEN COUNT(DISTINCT script.id) = SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) AND COUNT(DISTINCT quiz.id) = SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) THEN true ELSE false END AS is_completed, ROUND(((SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END)/COUNT(DISTINCT script.id)) + (SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END)/COUNT(DISTINCT quiz.id))) * 100 * 0.5, 1) AS progress FROM Category c LEFT JOIN c.situationList si INNER JOIN si.situationTransList st LEFT JOIN si.scriptList script LEFT JOIN script.userScriptList us WITH us.user.id = :userId LEFT JOIN si.quizList quiz LEFT JOIN quiz.userQuizList uq WITH uq.user.id = :userId WHERE c.common = :categoryCommon GROUP BY si.id, si.thumbnail, st.lang, st.title")
//    @Query("SELECT si.id, si.thumbnail, st.lang, st.title, " +
//        "       SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) AS completed_scripts, " +
//        "       COUNT(DISTINCT script.id) AS total_scripts, " +
//        "       SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) AS completed_quizzes, " +
//        "       COUNT(DISTINCT quiz.id) AS total_quizzes, " +
//        "       CASE WHEN COUNT(DISTINCT script.id) = SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) " +
//        "                 AND COUNT(DISTINCT quiz.id) = SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) " +
//        "            THEN true ELSE false END AS is_completed, " +
//        "       ROUND(((SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END)/COUNT(DISTINCT script.id)) " +
//        "            + (SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END)/COUNT(DISTINCT quiz.id))) * 100 * 0.5, 1) AS progress " +
//        "FROM Category c " +
//        "INNER JOIN c.situationList si ON c.id = si.category.id " +
//        "INNER JOIN si.situationTransList st ON si.id = st.situation.id " +
//        "LEFT JOIN si.scriptList script ON script.situation.id = si.id " +
//        "LEFT JOIN script.userScriptList us ON us.script.id = script.id AND us.user.id = :userId " +
//        "LEFT JOIN si.quizList quiz ON quiz.situation.id = si.id AND quiz.script.id = script.id " +
//        "LEFT JOIN quiz.userQuizList uq ON uq.quiz.id = quiz.id AND uq.user.id = :userId " +
//        "WHERE c.common = :categoryCommon " +
//        "GROUP BY si.id, si.thumbnail, st.lang, st.title")
    public List<SituationByCategoryResponseDto> getSituationListByCategory(@Param("userId") Long userId1, @Param("userId") Long userId2, @Param("categoryCommon") String categoryCommon);

//    @Query("SELECT new com.a608.ddobagi.api.dto.respoonse.SituationWithoutUserResponseDto(si.id, si.thumbnail, st.lang, st.title) " +
//            "FROM Category c " +
//            "INNER JOIN Situation si ON c.id = si.category.id" +
//            " " +
//            "INNER JOIN SituationTrans st ON si.id = st.situation.id " +
//            "WHERE c.common = :categoryCommon")
//    public List<SituationWithoutUserResponseDto> getSituationWithoutUser(@Param("categoryCommon") String categoryCommon);
//
//    @Query("SELECT new com.a608.ddobagi.api.dto.respoonse.SituationWithUserResponseDto(" +
//            "       SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END), " +
//            "       COUNT(DISTINCT sc.id), " +
//            "       SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END), " +
//            "       COUNT(DISTINCT quiz.id), " +
//            "       CASE WHEN COUNT(DISTINCT sc.id) = SUM(CASE WHEN us.pronounce >= 2.0 THEN 1 ELSE 0 END) " +
//            "                 AND COUNT(DISTINCT quiz.id) = SUM(CASE WHEN uq.isNowCorrected = true THEN 1 ELSE 0 END) " +
//            "            THEN true ELSE false END) " +
//            "FROM Category c " +
//            "INNER JOIN Situation si ON c.id = si.category.id " +
//            "INNER JOIN SituationTrans st ON si.id = st.situation.id " +
//            "LEFT JOIN Script sc ON sc.situation.id = si.id " +
//            "LEFT JOIN UserScript us ON us.script.id = sc.id AND us.user.id = :userId1 " +
//            "LEFT JOIN Quiz quiz ON quiz.situation.id = si.id AND quiz.script.id = sc.id " +
//            "LEFT JOIN UserQuiz uq ON uq.quiz.id = quiz.id AND uq.user.id = :userId2 " +
//            "WHERE c.common = :categoryCommon " +
//            "GROUP BY si.id")
//    public List<SituationWithUserResponseDto> getSituationWithUser(@Param("userId1") Long userId1, @Param("userId2") Long userId2, @Param("categoryCommon") String categoryCommon);
}
