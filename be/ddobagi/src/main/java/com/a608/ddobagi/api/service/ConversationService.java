package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.respoonse.ScriptResponse;
import com.a608.ddobagi.api.dto.respoonse.SituationDetailResponse;
import com.a608.ddobagi.db.repository.ConversationRepository;
import com.a608.ddobagi.db.repository.ConversationRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConversationService {

    private final ConversationRepository conversationRepository;
    private final ConversationRepositoryImpl conversationRepositoryImpl;

    public SituationDetailResponse findSituationDetails(Long situationId) {
        return conversationRepositoryImpl.selectSituationDetails(situationId);
    }

    public Long findRecordCount(Long situationId, Long userId) {
        return conversationRepositoryImpl.selectRecordCount(situationId, userId);
    }

    public List<ScriptResponse> findScriptList(Long situationId, Long userId) {
        return conversationRepositoryImpl.selectScriptList(situationId, userId);
    }
}
