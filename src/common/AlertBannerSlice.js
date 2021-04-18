import { createSlice } from '@reduxjs/toolkit';

export const AlertBannerSlice = createSlice({
  name: 'alertBanner',
  initialState: {
    alerts: [],
  },
  reducers: {
    createAlert: (state, action) => {
      state.alerts.push({
        message: action.payload.message,
        theme: action.payload.theme,
      });
    },
  },
});

export const { createAlert } = AlertBannerSlice.actions;

export default AlertBannerSlice.reducer;
