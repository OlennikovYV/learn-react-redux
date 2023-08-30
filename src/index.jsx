import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./reducers";
import "./styles/index.css";
import Main from "./pages/Main.jsx";

const store = configureStore({
  reducer: rootReducer,
});

const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>
  </React.StrictMode>
);