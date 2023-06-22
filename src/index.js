import React from "react";
import ReactDOM from "react-dom";
import { data } from "./data";
import { App } from "./app";
import "./styles/index.css";

// eslint-disable-next-line no-undef
const el = document.getElementById("app");
ReactDOM.render(<App data={data} />, el);
