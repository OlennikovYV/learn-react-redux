import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counter1Slice = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    increment1(state) {
      state.value++;
    },
    decrement1(state) {
      state.value--;
    },
  },
});

export const { increment1, decrement1 } = counter1Slice.actions;
export default counter1Slice.reducer;
