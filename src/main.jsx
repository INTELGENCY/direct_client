import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/src/Styles/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Provider } from "react-redux";
import { store } from "./Store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <Provider store={store}>
    <App />
  </Provider>
  </>
);
