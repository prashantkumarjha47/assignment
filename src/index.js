import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./main/Main";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
