/*global naver */

import React, { useEffect, useState } from "react";
import markerController from "../lib/MarkerController";
import SingleItemModal from "./modals/SingleItemModal";

const drawMap = (divId) => {
  const map = new naver.maps.Map(divId, {
    center: new naver.maps.LatLng(37.551004, 126.940992), // 시청
    zoom: 15,
  });
  return map;
};

const Content = () => {
  const [modalShow, setModalShow] = useState(null);

  useEffect(() => {
    const map = drawMap("map");
    markerController.setVariables(map, setModalShow);
    markerController.drawMarkers();
  }, [markerController]);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
      {modalShow ? (
        <SingleItemModal show={!!modalShow} onHide={() => setModalShow(null)} data={modalShow} />
      ) : null}
    </>
  );
};

export default Content;
