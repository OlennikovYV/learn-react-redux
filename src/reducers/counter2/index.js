import { createSlice } from "@reduxjs/toolkit";

export const initialState2 = { value: 0 };

const counter2Slice = createSlice({
  name: "counter2",
  initialState: initialState2,
  reducers: {
    increment2(state) {
      state.value++;
    },
    decrement2(state) {
      state.value--;
    },
    reset2() {
      return initialState2;
    },
  },
});

export const { increment2, decrement2, reset2 } = counter2Slice.actions;
export default counter2Slice.reducer;
