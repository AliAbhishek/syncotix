import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "./ThemeSlice";




export const ThemeAction = ThemeSlice.actions;


const Store = configureStore({
  reducer: {
    themeReducer: ThemeSlice.reducer,
    
  },
});

export default Store;
