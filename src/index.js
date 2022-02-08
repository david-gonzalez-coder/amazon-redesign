import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import reducer, { initialState } from "./store/reducer";
import { StateProvider } from "./store/StateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);