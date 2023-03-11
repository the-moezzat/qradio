import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { stationsApi } from "./apis/stationsApi";
import { appReducer } from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    [stationsApi.reducerPath]: stationsApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stationsApi.middleware),
});

setupListeners(store.dispatch);

export {
  useFetchAllStationsQuery,
  useFetchSupportedLanguagesQuery,
} from "./apis/stationsApi";
export { changeLanguage, changeCurrentStation } from "./slices/appSlice";
