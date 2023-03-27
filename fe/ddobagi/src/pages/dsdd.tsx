import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../components/ParentPage/ParentPage_demo.css";

const { kakao } = window;

declare global {
  interface Window {
    kakao: any;
  }
}

function CenterMap2(){
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
        axios.get('http://j8a608.p.ssafy.io:8080/api/centers?sido=11').then(response => {
            const data = response.data;
            setData(data);

            for (let i = 0; i < data.length; i++) {
                const iwRemoveable = true;
    
                var content = `<div class="wrap">
                                <div class="info">
                <div class="title">
                ${data[i].address}
                <div class="close" onclick="closeOverlay()" title="닫기"></div>
                </div>
                <div class="body">
                <div class="desc">
                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>
                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
                </div>
                </div>
                </div>  
                </div>`;

                const infowindow = new kakao.maps.InfoWindow({
                    content: content
                    // removable: iwRemoveable,
                });

                // // 마커 위에 커스텀오버레이를 표시합니다
                // // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
                // var overlay = new kakao.maps.CustomOverlay({
                //     content: content,
                //     map: map,
                //     position: marker.getPosition()       
                // });

                // 지도에 마커를 표시
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(parseFloat(data[i].latitude), parseFloat(data[i].longitude)),
                    clickable: true,
                });

                // 마커 위에 커스텀오버레이를 표시합니다
                // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
                var overlay = new kakao.maps.CustomOverlay({
                    content: content,
                    map: map,
                    position: marker.getPosition()       
                });

    
                // // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
                // kakao.maps.event.addListener(marker, "click", function () {
                //     // overlay.setMap(map);
                //     infowindow.open(map, marker);
                // });

                
                // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
                kakao.maps.event.addListener(marker, 'click', function() {
                    overlay.setMap(map);
                });

                //커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
                // function closeOverlay() {
                //     overlay.setMap(null);     
                // }
    
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

export default CenterMap2;