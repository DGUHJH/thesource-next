import { createSlice } from '@reduxjs/toolkit';
import { cookies } from 'api/methods/cookies';

export type LoginState = {
  login: boolean;
  email: string;
  username: string;
};

const initialState: LoginState = {
  login: false,
  email: '',
  username: '',
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
      state.email = '';
      state.username = '';
      cookies.remove('access_token');
    },
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
  },
});

export const { setLogin, setLogout, setUserInfo } = loginDialogSlice.actions;

export default loginDialogSlice.reducer;
