//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//import your own components
import { TodoList } from "./component/TodoList.js";

//render your react application
ReactDOM.render(<TodoList />, document.querySelector("#app"));
