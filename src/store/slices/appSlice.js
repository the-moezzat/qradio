import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    language: {
      id: "2",
      language: "English",
      native: "English",
      surah: "https://www.mp3quran.net/api/v3/suwar?language=eng",
      rewayah: "https://www.mp3quran.net/api/v3/riwayat?language=eng",
      reciters: "https://www.mp3quran.net/api/v3/reciters?language=eng",
      radios: "https://www.mp3quran.net/api/v3/radios?language=eng",
      tafasir: "https://www.mp3quran.net/api/v3/tafasir?language=eng",
    },
    currentStation: {},
  },
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
    changeCurrentStation(state, action) {
      state.currentStation = action.payload;
    },
  },
});

export const { changeLanguage, changeCurrentStation } = appSlice.actions;
export const appReducer = appSlice.reducer;
