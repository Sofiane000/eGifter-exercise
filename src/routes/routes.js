import React, { lazy, Suspense, useState, useEffect } from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
//import MainLayout from "../components/layout/main-layout";
//import Error from "../pages/error";

import Splash from "../utils/splash";
import allRoutes from "./index";

function Routes() {



  return (
    <Suspense fallback={<Splash />}>
      <Router>

        <Switch>
          {allRoutes.map((route, i) => {
            return (
              <Route exact key={i} path={route.path}>
                {route.redirect ? (
                  <Redirect to={route.to} />
                ) : (
                  <>
                    <route.component />
                  </>
                )}
              </Route>
            );
          })}
          <Route path="*">

          </Route>
        </Switch>

      </Router>
    </Suspense>
  );
}

export default Routes;