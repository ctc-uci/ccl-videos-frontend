import { createSlice } from '@reduxjs/toolkit';

export const CustomerPageContainerSlice = createSlice({
  name: 'customerPageContainer',
  initialState: {
    videoData: {},
  },
  reducers: {
    // url, thumbnail, title, desc, date
    setVideoData: (state, action) => {
      state.videoData = action.payload;
    },
  },
});

export const { setVideoData } = CustomerPageContainerSlice.actions;

export default CustomerPageContainerSlice.reducer;
