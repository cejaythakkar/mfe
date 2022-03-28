import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

const mount = (element) => {
  ReactDom.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    element
  );
};
876;

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#standalone-marketing-container");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
