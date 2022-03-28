import React from "react";
import MarketingApp from "./components/MarketingApp";

export default () => {
  return (
    <div id="container">
      <div id="header">Header Section</div>
      <div id="body">
        <MarketingApp />
      </div>
      <div id="footer">Footer Section</div>
    </div>
  );
};
