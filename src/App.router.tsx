import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard.page";
import LoginPage from "./pages/login/login.page";
import NotFoundPage from "./pages/not-found/not-found.page";

const Router = (_props: any) => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Route paht="/login" component={LoginPage} />
      <Route render={() => <NotFoundPage />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
