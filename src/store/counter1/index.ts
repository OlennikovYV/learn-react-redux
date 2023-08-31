import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface counter1InitState {
  isLoadingCounter1: boolean;
  value: number;
}

export const initialState1: counter1InitState = {
  isLoadingCounter1: false,
  value: 0,
};

export const fakeFetchCounter1 = createAsyncThunk(
  "counter1/fakeFetchCounter1",
  async (value: number) => {
    const response: number = await new Promise((resolve) => {
      setTimeout(() => resolve(value), 2000);
    });

    return response;
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
      .addCase(fakeFetchCounter1.pending, (state, _) => {
        state.isLoadingCounter1 = true;
      })
      .addCase(fakeFetchCounter1.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoadingCounter1 = false;
      }),
});

export const { incrementCounter1, decrementCounter1, resetCounter1 } =
  counter1Slice.actions;
export default counter1Slice.reducer;
