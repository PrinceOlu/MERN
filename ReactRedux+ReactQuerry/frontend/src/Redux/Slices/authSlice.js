import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  // Initial state
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  // Reducers
  reducers: {
    // login
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    // logout
    logoutAction: (state) => {
      // remove user from localstorage
      localStorage.removeItem("userInfo");
      state.user = null;
    },
  },
});
// Generate the actions
export const { loginAction, logoutAction } = authSlice.actions;
// Generate the reducers
const authReducer = authSlice.reducer;
export default authReducer;
