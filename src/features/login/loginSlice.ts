import { createSlice } from '@reduxjs/toolkit';

export type LoginDialogState = {
  open: boolean;
  mobileOpen: boolean;
};

const initialState: LoginDialogState = {
  open: false,
  mobileOpen: false,
};

export const loginDialogSlice = createSlice({
  name: 'loginDialog',
  initialState,
  reducers: {
    loginDialogOpen: (state) => {
      state.open = true;
    },
    loginDialogClose: (state) => {
      state.open = false;
    },
    mobileLoginDialogOpen: (state) => {
      state.mobileOpen = true;
    },
    mobileLoginDialogClose: (state) => {
      state.mobileOpen = false;
    },
  },
});

export const {
  loginDialogOpen,
  loginDialogClose,
  mobileLoginDialogOpen,
  mobileLoginDialogClose,
} = loginDialogSlice.actions;

export default loginDialogSlice.reducer;
