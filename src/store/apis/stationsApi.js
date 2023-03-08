import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://mp3quran.net/api/v3";

export const stationsApi = createApi({
  reducerPath: "stations",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints(builder) {
    return {
      fetchAllStations: builder.query({
        query: (language) => {
          return {
            url: `/radio`,
            method: "GET",
            params: {
              language,
            },
          };
        },
      }),
    };
  },
});
