import { createSlice } from "@reduxjs/toolkit";
import { stationsApi } from "../apis/stationsApi";

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
    searchTerm: "",
    isRunning: false,
    isLoading: false,
    favoriteList: JSON.parse(localStorage.getItem("favorite")) || {},
    stations: [],
  },
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
    changeCurrentStation(state, action) {
      state.currentStation = action.payload;
    },
    setIsRunning(state, action) {
      state.isRunning = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addToFav(state, action) {
      state.favoriteList[action.payload.id] = action.payload;
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
    removeFromFav(state, action) {
      state.favoriteList[action.payload.id] = undefined;
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      stationsApi.endpoints.fetchAllStations.matchFulfilled,
      (state, action) => {
        state.stations = action.payload;
      }
    );
  },
});

export const {
  changeLanguage,
  changeCurrentStation,
  setIsRunning,
  setIsLoading,
  setSearchTerm,
  addToFav,
  removeFromFav,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
