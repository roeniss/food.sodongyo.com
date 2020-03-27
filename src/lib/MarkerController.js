/*global naver */

import locations from "../resources/data/mapdata";
import category from "../resources/data/category"

class MarkerController {
  constructor() {
    this.locations = locations;
    this.markerGeoDict = {};
    this._initializeMarkerDict();
    this.map = null;
    this.useStateSetter = null;
    this.markerCategoryArr = Array(category.length).fill(null).map(() => Array());
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
          url: `/images/markers/marker${location.mainCategory}.png`,
          scaledSize: new naver.maps.Size(40, 40),
        },
      });

      naver.maps.Event.addListener(marker, "click", () => {
        this.useStateSetter(location);
      });

      this.markerCategoryArr[location.mainCategory].push(marker)
    });
    console.log(this.markerCategoryArr[0][0].getShape())
  }

  setCategoryVisibility(ids, result) {
    this.markerCategoryArr.forEach((category, id) => {
      if (!ids.includes(id)) return false; // "continue"
      category.forEach(marker => {
        marker.setVisible(result)
      })
    })
  }

  isVisibleCategory(id) {
    return this.markerCategoryArr[id][0].getVisible();
  }

  _getMakerPosition(y, x) {
    if (this.markerGeoDict[y][x].length === 1) {
      return new naver.maps.LatLng(y, x);
    } else {
      const offset = 0.00005
      const duplicateCnt = this.markerGeoDict[y][x].length - 2 // 0부터 시작하기 위해
      const offsetArr = [[-offset, 0], [0, offset], [offset, 0], [0, -offset],]
      y = parseFloat(y) + offsetArr[duplicateCnt % 4][1] * (parseInt(duplicateCnt / 4) + 1);
      x = parseFloat(x) + offsetArr[duplicateCnt % 4][0] * (parseInt(duplicateCnt / 4) + 1);
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
}

const markerController = new MarkerController();
export default markerController;
