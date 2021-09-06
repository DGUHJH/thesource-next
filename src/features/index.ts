import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginDialogSlice from 'features/login/loginDialogSlice';
import loginSlice from 'features/login/loginSlice';

const rootReducer = combineReducers({
  login: loginSlice,
  loginDialog: loginDialogSlice,
});
export type ReducerType = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});
export default store;
