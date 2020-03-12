import React from "react";
import ReactDOM from "react-dom";
import "./resources/stylesheets/index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

console.log(process.env.REACT_APP_NAVER_APP_NAME);
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
