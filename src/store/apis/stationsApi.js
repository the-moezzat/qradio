import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://mp3quran.net/api/v3";

export const stationsApi = createApi({
  reducerPath: "stations",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    mode: "cors",
  }),
  endpoints(builder) {
    return {
      fetchAllStations: builder.query({
        query: (language) => {
          return {
            url: language,
            method: "GET",
          };
        },
        transformResponse(response, meta, arg) {
          const stations = response.radios.map((station) => station);
          return stations;
        },
      }),

      fetchSupportedLanguages: builder.query({
        query: () => {
          return {
            url: "/languages",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAllStationsQuery, useFetchSupportedLanguagesQuery } =
  stationsApi;
