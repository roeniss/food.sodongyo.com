/*global naver */

import locations from "../resources/data/mapdata.js";

class MarkerController {
  constructor(map, useStateSetter) {
    this.markerGeoDict = {};
    this.locations = locations;
    this._markerDictInitialize();
  }
  setVariables(map, useStateSetter) {
    this.map = map;
    this.useStateSetter = useStateSetter;
  }

  drawMarkers() {
    this.locations.forEach((location) => {
      const [y, x] = location.geolocation;
      location.type = "Item";
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(y, x),
        map: this.map,
        icon: {
          url: `/images/markers/marker${location.category1}.png`,
          scaledSize: {
            width: "40",
            height: "40"
          }
        }
      });
      naver.maps.Event.addListener(marker, "click", () => {
        this.useStateSetter(location);
      });
      this.markerGeoDict[y][x].push(location);
    });
  }

  addWarpperMarkerIfNeeded() {
    const overlappedGeolocation = this._checkIfMarkerOverlapped();
    overlappedGeolocation.forEach(([y, x]) => {
      this._drawWrapperMarker(y, x, { type: "List", geolocation: [y, x] });
    });
  }

  getLocationInfoById(id) {
    return this.locations[id - 1]; // id는 1부터 시작하는 반면, array는 0부터 시작하므로 마이너스 1 (-1)
  }

  _markerDictInitialize() {
    this.locations.forEach((location) => {
      const [y, x] = location.geolocation;
      if (!this.markerGeoDict[y]) {
        this.markerGeoDict[y] = {};
        this.markerGeoDict[y][x] = [];
      } else if (!this.markerGeoDict[y][x]) this.markerGeoDict[y][x] = [];
    });
  }

  _checkIfMarkerOverlapped() {
    const overlappedGeolocation = [];
    Object.keys(this.markerGeoDict).forEach((y) => {
      Object.keys(this.markerGeoDict[y]).forEach((x) => {
        if (this.markerGeoDict[y][x].length > 1) overlappedGeolocation.push([y, x]);
      });
    });
    return overlappedGeolocation;
  }

  _drawWrapperMarker(y, x, triggerData) {
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(y, x),
      map: this.map,
      zIndex: 999,
    });
    naver.maps.Event.addListener(marker, "click", () => {
      this.useStateSetter(triggerData);
    });
  }

}

const markerController = new MarkerController();
export default markerController;
