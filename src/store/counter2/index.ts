import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface counter2InitState {
  isLoadingCounter2: boolean;
  value: number;
}

export const initialState2: counter2InitState = {
  isLoadingCounter2: false,
  value: 0,
};

export const fakeFetchCounter2 = createAsyncThunk(
  "counter2/fakeFetchCounter2",
  async (value: number) => {
    const response: number = await new Promise((resolve) => {
      setTimeout(() => resolve(value), 2000);
    });

    return response;
  }
);

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
  extraReducers: (builder) =>
    builder
      .addCase(fakeFetchCounter2.pending, (state, action) => {
        state.isLoadingCounter2 = true;
      })
      .addCase(fakeFetchCounter2.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoadingCounter2 = false;
      }),
});

export const { incrementCounter2, decrementCounter2, resetCounter2 } =
  counter2Slice.actions;
export default counter2Slice.reducer;
