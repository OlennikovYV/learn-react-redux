import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState1 = { isLoadingCounter1: false, value: 0 };

export const fakeFetchCounter1 = createAsyncThunk(
  "counter1/fakeFetchCounter1",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ value: 10 }), 2000);
    });
  }
);

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
  extraReducers: (builder) =>
    builder
      .addCase(fakeFetchCounter1.pending, (state, action) => {
        state.isLoadingCounter1 = true;
      })
      .addCase(fakeFetchCounter1.fulfilled, (state, action) => {
        state.value = action.payload.value;
        state.isLoadingCounter1 = false;
      }),
});

export const { incrementCounter1, decrementCounter1, resetCounter1 } =
  counter1Slice.actions;
export default counter1Slice.reducer;
