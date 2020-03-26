/*global naver */

import locations from "../resources/data/mapdata.js";

class MarkerController {
  constructor(map, useStateSetter) {
    this.markerGeoDict = {};
    this.locations = locations;
    this._initializeMarkerDict();
  }

  setVariables(map, useStateSetter) {
    this.map = map;
    this.useStateSetter = useStateSetter;
  }

  drawMarkers() {
    this.locations.forEach((location) => {
      const [y, x] = location.geolocation;

      this.markerGeoDict[y][x].push(location);
      location.type = "Item";
      const marker = new naver.maps.Marker({
        position: this._getMakerPosition(y, x),
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
    });
  }

  addWarpperMarkerIfNeeded() {
    const overlappedGeolocation = this._checkIfMarkerOverlapped();
    overlappedGeolocation.forEach(([y, x]) => {
      this._drawWrapperMarker(y, x, { type: "List", geolocation: [y, x] });
    });
  }

  getLocationInfoById(id) {
    return this.locations[id - 1]; // id는 1부터 시작하는 반면, array는 0부터 시작하므로.
  }

  _getMakerPosition(y, x) {
    if (this.markerGeoDict[y][x].length === 1) {
      return new naver.maps.LatLng(y, x);
    } else {
      const offset = 0.00005
      const duplicateCnt = this.markerGeoDict[y][x].length - 2
      const offsetArr = [[-offset, 0], [0, offset], [offset, 0], [0, -offset],]
      y = parseFloat(y) + offsetArr[duplicateCnt % 4][1] * (parseInt(duplicateCnt / 4) + 1);
      x = parseFloat(x) + offsetArr[duplicateCnt % 4][0] * (parseInt(duplicateCnt / 4) + 1);
      console.log(duplicateCnt, y, x);

      return new naver.maps.LatLng(y, x);
    }
  }

  _initializeMarkerDict() {
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
