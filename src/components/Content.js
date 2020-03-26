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
    // markerControllesr.addWarpperMarkerIfNeeded();
  }, [markerController]);

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
