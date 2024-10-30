import { apiSlice } from "../apiSlice";

export const modulesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchModules: builder.query({
      query: () => "/modules",
    }),
    createModule: builder.mutation({
      query: (newModule) => ({
        url: "/modules",
        method: "POST",
        body: newModule,
      }),
    }),
    updateModule: builder.mutation({
      query: ({ id, ...updatedModule }) => ({
        url: `/modules/${id}`,
        method: "PUT",
        body: updatedModule,
      }),
    }),
    deleteModule: builder.mutation({
      query: (id) => ({
        url: `/modules/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchModulesQuery,
  useCreateModuleMutation,
  useUpdateModuleMutation,
  useDeleteModuleMutation,
} = modulesApi;
