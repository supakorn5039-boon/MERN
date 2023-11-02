import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "boon",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state = "boon login";
    },
    logout: (state) => {
      state.value = "boon logout";
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = UserSlice.actions;

export default UserSlice.reducer;
