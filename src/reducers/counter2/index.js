import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState2 = { isLoadingCounter2: false, value: 0 };

export const fakeFetchCounter2 = createAsyncThunk(
  "counter1/fakeFetchCounter2",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ value: 20 }), 2000);
    });
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
        state.value = action.payload.value;
        state.isLoadingCounter2 = false;
      }),
});

export const { incrementCounter2, decrementCounter2, resetCounter2 } =
  counter2Slice.actions;
export default counter2Slice.reducer;
