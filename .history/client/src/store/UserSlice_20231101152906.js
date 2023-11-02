import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "boon",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state = "boon login";
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = UserSlice.actions;

export default UserSlice.reducer;
