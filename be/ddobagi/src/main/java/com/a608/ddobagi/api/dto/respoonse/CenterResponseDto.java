package com.a608.ddobagi.api.dto.respoonse;

import com.a608.ddobagi.db.entity.Center;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
public class CenterResponseDto {

    private String type;

    private String zipCode;

    private String address;

    private String Latitude;

    private String Longitude;

    private String tel;

}
