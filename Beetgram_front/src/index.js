import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./components/App";

axios.defaults.baseURL = "http://8cb0120ca9d4.ngrok.io/";
// axios.defaults.withCredentials = true;
export const API_BASE_URL = "http://8cb0120ca9d4.ngrok.io/";
export const ACCESS_TOKEN = "access_token";

ReactDOM.render(<App />, document.getElementById("root"));
