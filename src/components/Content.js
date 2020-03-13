/*global naver */

import React, { useEffect, useState } from "react";
import MarkerController from "../lib/MarkerController";
import ModalCenter from "./modals/ModalCenter";

const drawMap = (divId) => {
  const map = new naver.maps.Map(divId, {
    center: new naver.maps.LatLng(37.551004, 126.940992), // 시청
    zoom: 15,
  });
  return map;
};

const Content = () => {
  const [modalShow, setModalShow] = useState(null);
  const [markerController, _] = useState(MarkerController);

  useEffect(() => {
    const map = drawMap("map");
    markerController.setVariables(map, setModalShow);
    markerController.drawMarkers();
    markerController.addWarpperMarkerIfNeeded();
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
      {/* <InfoModal show={true} onHide={() => setModalShow(null)} data={{ 1: 2 }} /> */}
      {modalShow ? (
        <ModalCenter show={!!modalShow} onHide={() => setModalShow(null)} data={modalShow} />
      ) : null}
    </>
  );
};

export default Content;

/* 
문제상황 

1. 일부 사진이 안보임 : SOLVED
제1원인은 "사진이 너무 커서"입니다. 하나당 10mb더군요... 모바일로는 기계가 고생좀 했을 겁니다. 즉, 고장난게 아니라 사진 다운로드 하느라... ㅎㅎ... 사진을 전부 500kb으로 압축해서 해결했어요.
--> 히노키공방, 도꼭지, 이대스타벅스R에 대해서 사진 나오는 것 확인했습니다. 일괄적으로 고친거라서 다른 부분도 괜찮을텐데, 설렁설렁 한번 둘러봐주세요.

2. 겹치는 마커 처리 : SOLVED
--> 죽을 뻔 했습니다. 제 머릿속으로 상상하기 힘든 수준의 디자인이라서... 

3. 카테고리별 컬러 마커 + 필터링(은 추후에. 일단은 설명서 모달 하나) : WORKING...
+) - 맛게살의 픽(맛게살 공인) : 무지개 그라데이션..?

5. 아래 버튼 중 맨 왼쪽 버튼은 필터링 버튼 : ...

6. 맨 오른쪽 버튼은 나중에 업로드 버튼이 되면 어떨까 생각이 듭니다. --> 봉인 버튼 (맛게살 제대 후 봉인해제) : WORKING...

7. 스플래시 : SOLVED

8.맛게살에 있는 리뷰들과 맛게살 사이트는 광고가 아니고, 리뷰를 위해 혜택을 제공받지 않았으며, 비영리적인 프로젝트라고 꼭 써주세요!! --> 버튼 하나? 아니다 푸터로 박고, 하단버튼을위로 올리자.

9. 모바일 앱 제대로 안뜨는거, pc에선 버튼 반응 안하는거, 버튼 디자인(아이콘으로 대체)
*/
