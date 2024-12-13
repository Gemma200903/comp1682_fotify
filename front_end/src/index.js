import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
import ExplorePage from "./page/Explore";
import HomePage from "./page/Home";
import SearchPage from "./page/Search";
import Authen from "./template/Authen";
import LoginPage from "./page/Login";
import SignUpPage from "./page/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Đặt Authen là Route chính */}
        <Route path="/" element={<Authen />}>
          {/* Route LoginPage */}
          <Route index element={<LoginPage />} />
        </Route>

        {/* Route con của App */}
        <Route path="signup" element={<SignUpPage></SignUpPage>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
