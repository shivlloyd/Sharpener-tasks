import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: localStorage.getItem("token"),
  email: localStorage.getItem("email"),
  isPremium: localStorage.getItem("isPremium"),
  isLoggedIn: localStorage.getItem("isloggedIn"),
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log(action.payload.email);

      state.token = action.payload.token;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },

    logout(state) {
      state.token = null;
      state.email = null;
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      state.isPremium = false;
      state.isLoggedIn = false;
      localStorage.removeItem("isPremium");
      localStorage.removeItem("isLoggedIn");
    },

    setIsPremium(state) {
      state.isPremium = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
