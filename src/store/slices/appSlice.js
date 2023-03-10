import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    language: {
      language: "English",
      nativeName: "English",
    },
    queryLink: "https://mp3quran.net/api/v3/radios?language=eng ",
  },
  reducers: {
    changeLanguage(state, action) {
      state.language.language = action.payload.language;
      state.language.nativeName = action.payload.native;
      state.queryLink = action.payload.radios;
    },
  },
});

export const { changeLanguage } = appSlice.actions;
