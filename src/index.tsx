import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import "./styles/index.css";
import Main from "./pages/Main";

const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer as HTMLElement);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>
  </React.StrictMode>
);
