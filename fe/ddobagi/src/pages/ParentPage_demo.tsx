import React, { useEffect, useState } from "react";
import axios from 'axios';

const { kakao } = window;

declare global {
  interface Window {
    kakao: any;
  }
}

function CenterMap(){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const markers = new Array();
        const container = document.getElementById("map"); // 지도를 표시할 div

        const options = {
            center : new kakao.maps.LatLng(36.2683, 127.6358),
            level : 14 //지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열
        axios.get('http://j8a608.p.ssafy.io:8080/api/centers',{
            params: {
              sido: 11
            }
            // params: {
            //     gugun: 11110
            // }
          }).then(response => {
            const data = response.data;
            setData(data);

            for (let i = 0; i < data.length; i++) {
                const iwRemoveable = true;
    
                console.log(data[i]);
    
                const infowindow = new kakao.maps.InfoWindow({
                    content: `<div style="width:100%; padding:5px;"><div>${data[i].zipCode}) ${data[i].address}</div>
                    <div>${data[i].type}</div>
                    <div>${data[i].tel}</div>
                    </div>`,
                    removable: iwRemoveable,
                });
    
                // 지도에 마커를 표시
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(parseFloat(data[i].latitude), parseFloat(data[i].longitude)),
                    clickable: true,
                });
    
                // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
                kakao.maps.event.addListener(marker, "click", function () {
                    // overlay.setMap(map);
                    infowindow.open(map, marker);
                });
    
                markers.push(marker);
            }

            const clusterer = new kakao.maps.MarkerClusterer({
                map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
                minLevel: 10, // 클러스터 할 최소 지도 레벨
            });

            clusterer.addMarkers(markers);
    
        })
        .catch(error => {
            console.error(error);
        });

  }, []);

  return (
    <div>
      <div
        id="map"
        style={{ width: "100%", height: "800px", position: "relative", overflow: "hidden" }}
      ></div>
    </div>
  );
};

export default CenterMap;