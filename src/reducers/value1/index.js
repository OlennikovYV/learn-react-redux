import { createSlice } from "@reduxjs/toolkit";

export const initialState1 = { value: 0 };

const counter1Slice = createSlice({
  name: "counter1",
  initialState: initialState1,
  reducers: {
    increment1(state) {
      state.value++;
    },
    decrement1(state) {
      state.value--;
    },
    reset1() {
      return initialState1;
    },
  },
});

export const { increment1, decrement1, reset1 } = counter1Slice.actions;
export default counter1Slice.reducer;
