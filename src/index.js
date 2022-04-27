import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./common.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="common">
      <SignUp />
      <LogIn />
    </div>
  </StrictMode>,
  rootElement
);