import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './slices/MainReducer';
export const store = configureStore({
  reducer: mainReducer,
});
