import React from "react";
import { Switch, Route } from "react-router-dom";
import PricingComponent from "./components/Pricing";
import LandingPageComponent from "./components/Landing";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPageComponent} /> 
       <Route path="/pricing" component={PricingComponent} /> 
    </Switch>
  );
};
