import { combineReducers } from "@reduxjs/toolkit";

import counter1Reducer from "./value1";
import counter2Reducer from "./value2";

export default combineReducers({
  counter1: counter1Reducer,
  counter2: counter2Reducer,
});
