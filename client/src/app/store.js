import { configureStore } from '@reduxjs/toolkit';
import Class from './classSlice';
import {api} from "./middleware/fetch"

export const store = configureStore({
  reducer: {
    Class
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api)
});
