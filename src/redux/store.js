import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.js';
import companyReducer from './companySlice.js';

export const store = configureStore({
  reducer: {
    companies: companyReducer,
    users: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // задаем чтобы девтулс включался только когда продакшн
  devTools: process.env.NODE_ENV !== 'production'
});
