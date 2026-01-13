import { createSlice } from "@reduxjs/toolkit";
import authData from "../../data/auth.json";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      if (email === authData.email && password === authData.password) {
        state.isAuthenticated = true;
        state.user = authData.name;
        state.error = null;
      } else {
        state.error = "Invalid credentials";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
