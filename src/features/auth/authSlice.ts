import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import authData from "../../data/auth.json";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  error: string | null;
}

interface LoginPayload {
  email: string;
  password: string;
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
    login: (state: AuthState, action: PayloadAction<LoginPayload>) => {
      const { email, password } = action.payload;

      if (email === authData.email && password === authData.password) {
        state.isAuthenticated = true;
        state.user = authData.name;
        state.error = null;
      } else {
        state.error = "Invalid credentials";
      }
    },
    logout: (state: AuthState) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
