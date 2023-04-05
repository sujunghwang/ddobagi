import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const { kakao } = window;

declare global {
  interface Window {
    kakao: any;
  }
}

function CenterMap() {
  const [data, setData] = useState([]);
  const [sidos, setSidos] = useState([]);
  const [guguns, setGuguns] = useState([]);
  const [selectSido, setSelectSido] = useState();
  const [selectGugun, setSelectGugun] = useState();

  useEffect(() => {
    const markers = new Array();
    const container = document.getElementById("map"); // 지도를 표시할 div

    const options = {
      center: new kakao.maps.LatLng(36.2683, 127.6358),
      level: 13, //지도의 확대 레벨
      size: new kakao.maps.Size(500, 400), // 지도의 크기
    };

    // const map = new window.kakao.maps.Map(container, options);
    // 변경 후
    const map = new kakao.maps.Map(container, options);

    // 시도 조회 => 처음에 불러와서 저장소에 저장해야함
    axios
      .get("https://j8a608.p.ssafy.io/api/centers/sido")
      .then((response) => {
        const sidos = response.data;
        setSidos(sidos);
        console.log(sidos);
      })
      .catch((error) => {
        console.error(error);
      });

    if (selectSido) {
      // 구군 목록 가져오기
      axios
        .get(
          `https://j8a608.p.ssafy.io/api/centers/gugun?sido=${selectSido}`
        )
        .then((response) => {
          const guguns = response.data;
          setGuguns(guguns);
          console.log(guguns);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열
    axios
      .get(
        `https://j8a608.p.ssafy.io/api/centers?sido=${selectSido}&gugun=${selectGugun}`
      )
      .then((response) => {
        const data = response.data;
        setData(data);

        for (let i = 0; i < data.length; i++) {
          const iwRemoveable = true;

          const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:94%; padding:3%; margin:auto;"><div>${data[i].zipCode}) ${data[i].address}</div>
                    <div>${data[i].type}</div>
                    <div>${data[i].tel}</div>
                    </div>`,
            removable: iwRemoveable,
          });

          var imageSrc = `/img/marker2.png`, // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(28, 34), // 마커이미지의 크기입니다
            imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

          // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
          var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );

          // 지도에 마커를 표시
          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(
              parseFloat(data[i].latitude),
              parseFloat(data[i].longitude)
            ),
            clickable: true,
            image: markerImage,
          });

          // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
          kakao.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
            map.setLevel(4, {
              anchor: new kakao.maps.LatLng(
                parseFloat(data[i].latitude),
                parseFloat(data[i].longitude)
              ),
            });
            var imageSrc = `/img/marker.png`, // 마커이미지의 주소입니다
              imageSize = new kakao.maps.Size(60, 64); // 마커이미지의 크기입니다

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            marker.setImage(markerImage);
          });

          markers.push(marker);
        }

        const clusterer = new kakao.maps.MarkerClusterer({
          map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
          averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel: 4, // 클러스터 할 최소 지도 레벨
        });

        if (selectSido) {
          map.setLevel(8, {
            anchor: new kakao.maps.LatLng(
              parseFloat(data[0].latitude),
              parseFloat(data[0].longitude)
            ),
          });
        }

        clusterer.addMarkers(markers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectSido, selectGugun]);

  function handleSidoChange(e: any) {
    const sidoCode = e.target.value;
    console.log(sidoCode);
    setSelectSido(sidoCode);
    setSelectGugun(undefined);
  }

  function handleGugunChange(e: any) {
    const gugunCode = e.target.value;
    console.log(gugunCode);
    setSelectGugun(gugunCode);
  }

  return (
    <div>
      <div className="search-box">
        <div
          className="row text-center align-v-center"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div className="col-2 no-right-padding" style={{ margin: "20px" }}>
            <FormControl
              fullWidth
              sx={{
                width: "300px",
                backgroundColor: "white",
                color: "black",
                // borderRadius:"20px",
                fontSize: "20px",
              }}
            >
              <InputLabel id="select-sido-label">시/도 선택</InputLabel>
              <Select
                labelId="select-sido-label"
                id="select-sido"
                value={selectSido}
                onChange={handleSidoChange}
              >
                <MenuItem value="undefined">시/도 선택</MenuItem>
                {sidos.map((sido) => (
                  // @ts-ignore
                  <MenuItem key={sido.sidoCode} value={sido.sidoCode}>
                    {/* @ts-ignore */}
                    {sido.sidoName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-2 no-right-padding" style={{ margin: "20px" }}>
            <FormControl
              sx={{
                width: "300px",
                backgroundColor: "white",
                color: "black",
                // borderRadius:"20px",
                fontSize: "20px",
              }}
            >
              <InputLabel id="select-gugun-label" sx={{ borderRadius: "20px" }}>
                구/군 선택
              </InputLabel>
              <Select
                labelId="select-gugun-label"
                id="select-gugun"
                value={selectGugun}
                onChange={handleGugunChange}
              >
                <MenuItem value="undefined">구/군 선택</MenuItem>
                {guguns.map((gugun) => (
                  // @ts-ignore
                  <MenuItem key={gugun.gugunCode} value={gugun.gugunCode}>
                    {/* @ts-ignore */}
                    {gugun.gugunName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div
        id="map"
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "20px",
          borderStyle: "solid",
          borderWidth: "2px",
        }}
      ></div>
    </div>
  );
}

export default CenterMap;
