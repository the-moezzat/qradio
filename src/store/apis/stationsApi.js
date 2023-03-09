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
            url: "/radios",
            method: "GET",
            params: {
              language,
            },
          };
        },
        transformResponse(response, meta, arg) {
          const stations = response.radios.map((station) => station);
          return stations;
        },
      }),
    };
  },
});

export const { useFetchAllStationsQuery } = stationsApi;
