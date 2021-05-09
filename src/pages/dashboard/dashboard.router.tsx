import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../not-found/not-found.page";
import WorkInProgressPage from "../work-in-progress/work-in-progress.page";
import LandingPage from "../landing/landing.page";

const DashboardRouter = () => {

  const baseUrl = "/dashboard";
  return (
    <Switch>
      <Route path={baseUrl + "/"} exact component={LandingPage} />
      <Route render={NotFoundPage} />
    </Switch>
  );
}

export default DashboardRouter;
