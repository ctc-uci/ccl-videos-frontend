import { configureStore } from '@reduxjs/toolkit';
import AlertBannerReducer from 'common/AlertBannerSlice';

const reducer = {
  notifications: AlertBannerReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
