import React, { ReactElement } from "react";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";
import Header from "../../components/header/header.component";
import DashboardRouter from "./dashboard.router";

const DashboardPage = (_props?: any): ReactElement => {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <ErrorBoundary>
          <DashboardRouter />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default DashboardPage;
