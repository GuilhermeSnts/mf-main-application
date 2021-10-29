import React, { Suspense } from "react";

import { Switch, BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "mf-auth-module";

const Router = (props) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <Switch {...props}>{AuthRoutes}</Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
