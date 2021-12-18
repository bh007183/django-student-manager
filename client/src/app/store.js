import { configureStore } from '@reduxjs/toolkit';
import Class from './classSlice';

export const store = configureStore({
  reducer: {
    Class
  },
});
