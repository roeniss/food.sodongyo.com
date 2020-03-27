export const getAppName = () =>
  process.env.NODE_ENV === "development" ? "localhost" : "food.sodongyo.com";


export const rgbToHex = (originalStr) => {
  // (ex) "123, 123, 23" => 
  const rgb = originalStr.replace(/[^,.\w\d]/g, "").split(",");
  const toHex = function (string) {
    string = parseInt(string, 10).toString(16);
    string = (string.length === 1) ? "0" + string : string;
    return string;
  };

  const r = toHex(rgb[0]);
  const g = toHex(rgb[1]);
  const b = toHex(rgb[2]);

  const hex = "#" + r + g + b;

  return hex;
} 