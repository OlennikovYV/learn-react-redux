import { combineReducers } from "@reduxjs/toolkit";

import counter1Reducer, { initialState1 } from "./counter1";
import counter2Reducer, { initialState2 } from "./counter2";

export const RESET_REDUX_STATE = "RESET_REDUX_STATE";

const globalInitState = {
  counter1: initialState1,
  counter2: initialState2,
};

const combineReducer = combineReducers({
  counter1: counter1Reducer,
  counter2: counter2Reducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_REDUX_STATE) {
    return globalInitState;
  }

  return combineReducer(state, action);
};

export default rootReducer;
