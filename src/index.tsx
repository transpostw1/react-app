import React from "react";
import ReactDOM from "react-dom";
// import { UserProvider } from "utils/contexts/userContext";
//
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "rc-slider/assets/index.css";
// STYLE
import "./styles/index.scss";
import "./index.css";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";

//
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./utils/contexts/userContext";


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <UserAuthContextProvider>
        {/* <UserProvider> */}
        <App />
        {/* </UserProvider> */}
      </UserAuthContextProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
