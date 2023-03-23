package com.a608.ddobagi.db.repository;

import com.a608.ddobagi.db.entity.Script;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationRepository extends JpaRepository<Script, Long> {
}
