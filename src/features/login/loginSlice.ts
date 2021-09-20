import { createSlice } from '@reduxjs/toolkit';

export type LoginState = {
  login: boolean;
};

const initialState: LoginState = {
  login: false,
};

export const loginDialogSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.login = true;
    },
    setLogout: (state) => {
      state.login = false;
    },
  },
});

export const { setLogin, setLogout } = loginDialogSlice.actions;

export default loginDialogSlice.reducer;
