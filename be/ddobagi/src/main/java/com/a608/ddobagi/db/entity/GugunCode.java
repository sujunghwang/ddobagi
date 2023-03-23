package com.a608.ddobagi.db.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
public class GugunCode {

    @Id
    private String gugunCode;

    private String gugunName;
}
