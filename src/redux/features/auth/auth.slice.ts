import { IUser } from "@/src/types/user.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* eslint-disable @typescript-eslint/no-explicit-any */

interface AuthState {
  user: IUser | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: IUser; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    resetUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;