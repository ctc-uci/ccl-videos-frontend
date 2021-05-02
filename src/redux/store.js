import { configureStore } from '@reduxjs/toolkit';
import AlertBannerReducer from 'common/AlertBannerSlice';
import CustomerPageContainerReducer from 'landing/CustomerPageContainerSlice';

const reducer = {
  notifications: AlertBannerReducer,
  videoData: CustomerPageContainerReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
