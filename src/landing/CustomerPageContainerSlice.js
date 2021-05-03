import { createSlice } from '@reduxjs/toolkit';

export const CustomerPageContainerSlice = createSlice({
  name: 'customerPageContainer',
  initialState: {
    videoData: {},
  },
  reducers: {
    setVideoData: (state, action) => {
      console.log('dispached')
      state.videoData = action.payload;
    },
  },
});

export const { setVideoData } = CustomerPageContainerSlice.actions;

export default CustomerPageContainerSlice.reducer;
