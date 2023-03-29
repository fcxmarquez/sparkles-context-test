import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { GeneralProvider } from "./context/generalContex";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </StrictMode>,
  rootElement
);
