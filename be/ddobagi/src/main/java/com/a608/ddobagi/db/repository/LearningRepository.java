package com.a608.ddobagi.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.a608.ddobagi.db.entity.Script;

public interface LearningRepository extends JpaRepository<Script, Long> {


}
