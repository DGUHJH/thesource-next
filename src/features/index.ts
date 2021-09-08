import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginDialogSlice from 'features/login/loginDialogSlice';
import loginSlice from 'features/login/loginSlice';
import joinDialogSlice from './join/joinDialogSlice';

const rootReducer = combineReducers({
  login: loginSlice,
  loginDialog: loginDialogSlice,
  joinDialog: joinDialogSlice,
});
export type ReducerType = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});
export default store;
