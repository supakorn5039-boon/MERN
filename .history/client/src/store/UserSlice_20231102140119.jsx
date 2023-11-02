import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "boon",
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = "boon login";
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = [];
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      localStorage.clear();
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
