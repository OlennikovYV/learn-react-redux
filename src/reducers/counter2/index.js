import { createSlice } from "@reduxjs/toolkit";

export const initialState2 = { value: 0 };

const counter2Slice = createSlice({
  name: "counter2",
  initialState: initialState2,
  reducers: {
    incrementCounter2(state) {
      state.value++;
    },
    decrementCounter2(state) {
      state.value--;
    },
    resetCounter2() {
      return initialState2;
    },
  },
});

export const { incrementCounter2, decrementCounter2, resetCounter2 } =
  counter2Slice.actions;
export default counter2Slice.reducer;
