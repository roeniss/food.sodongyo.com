import { rgbToHex } from "../../lib/helper"

export default [
  // id === mainCategory
  { id: 0, rgb: '229,58,64', hex: rgbToHex('229,58,64'), subCategory: ["한식", "국수", "분식"] },
  { id: 1, rgb: '255,255,0', hex: rgbToHex('255,255,0'), subCategory: ["중식", "기타"] },
  { id: 2, rgb: '88,201,185', hex: rgbToHex('88,201,185'), subCategory: ["일식", "돈까스"] },
  { id: 3, rgb: '239,82,133', hex: rgbToHex('239,82,133'), subCategory: ["양식", "피자", "치킨"] },
  { id: 4, rgb: '111,33,8', hex: rgbToHex('111,33,8'), subCategory: ["카페", "디저트", "샌드위치"] },
  { id: 5, rgb: '12,215,1', hex: rgbToHex('12,215,1'), subCategory: ["비건"] },
  { id: 6, rgb: '0,128,255', hex: rgbToHex('0,128,255'), subCategory: ["회식", "고기"] },
  { id: 7, rgb: '241,111,3', hex: rgbToHex('241,111,3'), subCategory: ["맛게살픽"] },
];