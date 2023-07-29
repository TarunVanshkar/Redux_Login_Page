import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";    //Curly braces mandatory here
import { Provider } from "react-redux";
import store from "./Redux/stores/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById("root"));
