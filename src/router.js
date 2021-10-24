import React from "react";

import { Switch, BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "mf-auth-module";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch {...props}>{AuthRoutes}</Switch>
    </BrowserRouter>
  );
};

export default Router;
