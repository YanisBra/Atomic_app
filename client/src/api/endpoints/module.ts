import { apiSlice } from "../apiSlice";

export const moduleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getModules: builder.query<any, void>({
      query: () => "/api/modules",
    }),
  }),
});

export const { useGetModulesQuery } = moduleApi;
