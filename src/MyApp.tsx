import React from "react";

import logo from "./assets/logo.svg";
import * as Styles from "./App";

function MyApp() {
  return (
    <Styles.Container>
      <div className="title">
        <img src={logo} alt="logo nlw setup" />
      </div>
      <Styles.Content>
        <h1>TEsteeeeeeeeeeeee</h1>
      </Styles.Content>
    </Styles.Container>
  );
}

export default MyApp;
