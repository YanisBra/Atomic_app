import { apiSlice } from "../apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/api/login_check",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: { token: string }) => {        
        return response.token; 
      },
      invalidatesTags: [{ type: "Auth", id: "STATUS" }],
    }),
  }),
});

export const { useLoginMutation } = authApi;
