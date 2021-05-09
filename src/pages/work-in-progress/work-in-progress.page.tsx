import React, { ReactElement } from "react";

const WorkInProgressPage = (): ReactElement => {
  return (
    <div style={{display: "flex", width: "100%", height: "50vh"}}>
      <div style={{margin: "auto", textAlign:"center"}}>
        <h1>Todavía estamos trabajando, disculpe las molestias.</h1>
      </div>
    </div>
  );
}

export default WorkInProgressPage;