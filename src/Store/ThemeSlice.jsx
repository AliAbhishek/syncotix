import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },
  reducers: {
    Dark(state,{payload}) {
      state.dark = payload.dark;
    },
  },
});
