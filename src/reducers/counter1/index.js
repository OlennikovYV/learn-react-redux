import { createSlice } from "@reduxjs/toolkit";

export const initialState1 = { value: 0 };

const counter1Slice = createSlice({
  name: "counter1",
  initialState: initialState1,
  reducers: {
    incrementCounter1(state) {
      state.value++;
    },
    decrementCounter1(state) {
      state.value--;
    },
    resetCounter1() {
      return initialState1;
    },
  },
});

export const { incrementCounter1, decrementCounter1, resetCounter1 } =
  counter1Slice.actions;
export default counter1Slice.reducer;
