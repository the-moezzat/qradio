import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { stationsApi } from "./apis/stationsApi";

export const store = configureStore({
  reducer: {
    [stationsApi.reducerPath]: stationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stationsApi.middleware),
});

setupListeners(store.dispatch);

export { useFetchAllStationsQuery } from "./apis/stationsApi";
