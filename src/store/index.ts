import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";

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

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === RESET_REDUX_STATE) {
    return globalInitState;
  }

  return combineReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
