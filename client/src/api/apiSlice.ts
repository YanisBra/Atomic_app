// src/api/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Remplacez par l'URL de votre API
  endpoints: (builder) => ({}),
});

export default apiSlice;
