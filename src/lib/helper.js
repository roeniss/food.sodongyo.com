export const getAppName = () =>
  process.env.NODE_ENV === "development" ? "localhost" : "food.sodongyo.com";

export const rgbToHex = (originalStr) => {
  // (ex) "123, 123, 23" =>
  const rgb = originalStr.replace(/[^,.\w\d]/g, "").split(",");
  const toHex = function(string) {
    string = parseInt(string, 10).toString(16);
    string = string.length === 1 ? "0" + string : string;
    return string;
  };

  const r = toHex(rgb[0]);
  const g = toHex(rgb[1]);
  const b = toHex(rgb[2]);

  const hex = "#" + r + g + b;

  return hex;
};

export const isDevMode = () => {
  return process.env.NODE_ENV === "development";
};

export const isChrome = () => {
  // origin : https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
  var isChromium = window.chrome;
  var winNav = window.navigator;
  var vendorName = winNav.vendor;
  var isOpera = typeof window.opr !== "undefined";
  var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
  var isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {
    // is Google Chrome on IOS
    return true;
  } else if (
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
    // is Google Chrome
    return true;
  } else {
    // not Google Chrome
    return false;
  }
};
