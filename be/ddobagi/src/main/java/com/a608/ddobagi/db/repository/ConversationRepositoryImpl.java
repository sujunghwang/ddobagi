package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.api.dto.respoonse.ScriptResponse;
import com.a608.ddobagi.api.dto.respoonse.SituationDetailResponse;
import com.a608.ddobagi.db.entity.Lang;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.a608.ddobagi.db.entity.QScript.script;
import static com.a608.ddobagi.db.entity.QScriptTrans.scriptTrans;
import static com.a608.ddobagi.db.entity.QSituation.situation;
import static com.a608.ddobagi.db.entity.QSituationTrans.situationTrans;
import static com.a608.ddobagi.db.entity.QUserScript.userScript;

@RequiredArgsConstructor
public class ConversationRepositoryImpl {

    private final JPAQueryFactory queryFactory;

    public SituationDetailResponse selectSituationDetails(Long situationId) {

        List<Tuple> list = queryFactory
                .select(
                        situation.id,
                        situation.videoUrl,
                        situationTrans.title,
                        situationTrans.description,
                        situationTrans.lang)
                .from(situation)
                .innerJoin(situation.situationTransList, situationTrans)
                .where(situation.id.eq(situationId))
                .orderBy(situationTrans.lang.asc(), situation.id.asc())
                .fetch();

        SituationDetailResponse result = new SituationDetailResponse();
        Map<Lang, Map<String,String>> map = new HashMap<>();

        result.setSituationVideoUrl(list.get(0).get(situation.videoUrl));

        for (Tuple tuple : list) {
            Map<String,String> temp = new HashMap<>();
            temp.put("title", tuple.get(situationTrans.title));
            temp.put("desc", tuple.get(situationTrans.description));
            map.put(tuple.get(situationTrans.lang), temp);
        }
        result.setLang(map);

        return result;

    }

    public Long selectRecordCount(Long situationId, Long userId) {
        return queryFactory
                .select(userScript.count())
                .from(userScript)
                .where(userScript.user.id.eq(userId)
                    .and(userScript.script.situation.id.eq(situationId)))
            .fetchOne();
    }

    public List<ScriptResponse> selectScriptList(Long situationId, Long userId) {

        List<ScriptResponse> list = queryFactory
                .select(Projections.constructor(ScriptResponse.class,
                        script.id,
                        script.startTime,
                        script.endTime,
                        script.scriptRole,
                        script.defaultContent,
                        userScript.recordUrl,
                        scriptTrans.lang,
                        scriptTrans.transContent))
                .from(script)
                .leftJoin(userScript).on(script.id.eq(userScript.script.id))
                .join(scriptTrans).on(script.id.eq(scriptTrans.script.id))
                .where(script.situation.id.eq(situationId).and(userScript.user.id.eq(userId)))
                .fetch();



        // System.out.println(list);


//        List<Tuple> result = queryFactory
//                .select(
//                        script.id,
//                        script.startTime,
//                        script.endTime,
//                        script.scriptRole,
//                        script.defaultContent,
//                        userScript.recordUrl)
//                .from(script)
//                .leftJoin(userScript).on(script.id.eq(userScript.script.id))
//                .join(scriptTrans).on(script.id.eq(scriptTrans.script.id))
//                .where(script.situation.id.eq(situationId)
//                        .and(userScript.user.id.eq(userId))
//                        .and(script.id.eq(scriptTrans.script.id)))
//                .distinct()
//                .fetch();

        /*
        select script.id, script.start_time, script.end_time, script.script_role,
        script.default_content, user_script.record_url, trans.content
        from script
        left outer join user_script
        on script.id=user_script.script_id
        join script_trans
        on script.id=script_trans.script_id
        join (select script_id, GROUP_CONCAT(lang, ":", trans_content) as content
        from script_trans
        group by script_id) as trans
        on script.id=trans.script_id
        where script.situation_id=1
        and user_script.user_id=1;
         */

        return list;
    }
}
