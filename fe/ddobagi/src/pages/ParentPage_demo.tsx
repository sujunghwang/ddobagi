import React, {useEffect, useState} from 'react';
 
// const { kakao } = window;

// declare global {
//     interface Window {
//       kakao: any;
//     }
//   }

// const KakaoMapEx1 = () => {
//     useEffect(() => {
//         // let markers = [];
//         const container = document.getElementById("map"); // 지도를 표시할 div
 
//         const options = {
//             center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//             level: 3, // 지도의 확대 레벨
//         };
 
//         const map = new window.kakao.maps.Map(container, options);

//         // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
//         const positions = [
//             {
//               content: '<div style="width:fit-content" class="wrap">' + 
//               '        <div class="title">' + 
//               '            카카오 스페이스닷원' + 
//               '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
//               '        <div class="body">' + 
//               '                <div class="ellipsis">63309) 제주특별자치도 제주시 첨단로 242</div>' + 
//             //   '                <div class="jibun ellipsis">(우) 63309 </div>' + 
//               '        </div>' + 
//               '    </div>' +    
//               '</div>',
//               latlng: new kakao.maps.LatLng(33.450705, 126.570677)
//             },
//             {
//               content: '<div>생태연못</div>',
//               latlng: new kakao.maps.LatLng(33.450936, 126.569477)
//             },
//             {
//               content: '<div>텃밭</div>',
//               latlng: new kakao.maps.LatLng(33.450879, 126.569940)
//             },
//             {
//               content: '<div>근린공원</div>',
//               latlng: new kakao.maps.LatLng(33.451393, 126.570738)
//             }
//         ];

//         for (let i = 0; i < positions.length; i++) {
//             // 지도에 마커를 표시
//             const marker = new kakao.maps.Marker({
//                 map: map,
//                 position: positions[i].latlng,
//                 clickable: true,
//             });

//             marker.setMap(map);

//             const iwRemoveable = true;
          
//             const infowindow = new kakao.maps.InfoWindow({
//                 content: positions[i].content,
//                 removable: iwRemoveable,
//             });
          
//             // kakao.maps.event.addListener(marker, 'mouseover', function(){infowindow.open(map, marker);});
//             // kakao.maps.event.addListener(marker, 'mouseout', function(){infowindow.close();});


//             // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
//             kakao.maps.event.addListener(marker, 'click', function() {
//                 // overlay.setMap(map);
//                 infowindow.open(map, marker);
//             });

//         }
//         // const markerPosition  = new kakao.maps.LatLng(37.5013068, 127.0396597);
//         // const marker = new kakao.maps.Marker({
//         //     position: markerPosition
//         // });
//         // marker.setMap(map);
 
//         // // 버튼 클릭에 따라 지도 이동 기능을 막거나 풀고 싶은 경우에는 map.setDraggable 함수를 사용
//         // function setDraggable(draggable: boolean) {
//         //     // 마우스 드래그로 지도 이동 가능여부를 설정
//         //     map.setDraggable(draggable);
//         // }
 
//         // console.log("loading kakaomap");
//     }, []);
 
//     return (
//         <div>
//             <div id="map" style={{width:'100%', height:'800px',position:'relative', overflow:'hidden' }}></div>
//         </div>
//     );
// };
 
// export default KakaoMapEx1;

const KakaoMapEx1 = () => {
    const [positions, setPositions] = useState([]);
  
    useEffect(() => {
      setPositions(clusterPositionsData.positions);
    },[])
  
    return (
      <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 36.2683,
            lng: 127.6358,
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
          }}
          level={14} // 지도의 확대 레벨
        >
          <MarkerClusterer
            averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel={10} // 클러스터 할 최소 지도 레벨
          >
            {positions.map((pos) => (
              <MapMarker
                key={`${pos.lat}-${pos.lng}`}
                position={{
                  lat: pos.lat,
                  lng: pos.lng,
                }}
              />
            ))}
          </MarkerClusterer>
        </Map>
    );
  }

export default KakaoMapEx1;