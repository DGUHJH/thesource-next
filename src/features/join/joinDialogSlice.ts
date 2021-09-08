import { createSlice } from '@reduxjs/toolkit';

export type JoinDialogState = {
  open: boolean;
  mobileOpen: boolean;
  step: number;
};

const initialState: JoinDialogState = {
  open: false,
  mobileOpen: false,
  step: 0,
};

export const joinDialogSlice = createSlice({
  name: 'joinDialog',
  initialState,
  reducers: {
    joinDialogOpen: (state) => {
      state.open = true;
      state.step = 0;
    },
    joinDialogClose: (state) => {
      state.open = false;
    },
    joinDialogNextStep: (state) => {
      state.step = state.step + 1;
    },
    mobileJoinDialogOpen: (state) => {
      state.mobileOpen = true;
    },
    mobileJoinDialogClose: (state) => {
      state.mobileOpen = false;
    },
  },
});

export const {
  joinDialogOpen,
  joinDialogClose,
  mobileJoinDialogOpen,
  mobileJoinDialogClose,
  joinDialogNextStep,
} = joinDialogSlice.actions;

export default joinDialogSlice.reducer;
