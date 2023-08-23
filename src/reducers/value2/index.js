import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counter2Slice = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    increment2(state) {
      state.value++;
    },
    decrement2(state) {
      state.value--;
    },
  },
});

export const { increment2, decrement2 } = counter2Slice.actions;
export default counter2Slice.reducer;
