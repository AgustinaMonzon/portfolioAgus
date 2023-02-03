import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Components/NavBar/NavBar";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  // <App />,
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>,
  document.getElementById("root")
);
