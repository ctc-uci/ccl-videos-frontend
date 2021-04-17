import { configureStore } from "@reduxjs/toolkit";
import AlertBannerReducer from '../common/AlertBannerSlice';
import PopupReducer from '../common/PopupSlice';

const reducer = {
  notifications: AlertBannerReducer,
  popups: PopupReducer
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
