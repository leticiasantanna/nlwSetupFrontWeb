import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./MyApp";
import { ThemeProvider } from "styled-components";
import themeDefault from "./styles/theme/themeDefaut";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themeDefault}>
      <MyApp />
    </ThemeProvider>
  </React.StrictMode>
);
