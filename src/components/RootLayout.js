import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import store from "./store/store";
import { Provider } from "react-redux";

function RootLayout() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <div className="container mx-auto mt-8">
          <Outlet />
        </div>
      </Provider>
    </div>
  );
}

export default RootLayout;
