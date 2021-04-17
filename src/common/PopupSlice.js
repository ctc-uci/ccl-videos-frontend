import { createSlice } from "@reduxjs/toolkit";
export const PopupSlice = createSlice({
  name: "popups",
  initialState: {
    popups: []
  },
  reducers: {
    createPopup: (state, action) => {
      console.log("in createPopup");
      state.popups.push({
        message: action.payload.message
      });
    },
  }
});

export const { createPopup } = PopupSlice.actions;

export default PopupSlice.reducer;
