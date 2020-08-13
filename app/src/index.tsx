import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Grommet } from "grommet";
import { AppContextProvider } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <Grommet full>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);