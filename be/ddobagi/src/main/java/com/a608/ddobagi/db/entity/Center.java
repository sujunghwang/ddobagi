package com.a608.ddobagi.db.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
public class Center {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sido;

    private String gugun;

    private String type;

    private String zipCode;

    private String address;

    private String Latitude;

    private String Longitude;

    private String tel;
}
