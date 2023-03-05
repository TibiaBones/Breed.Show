import baseApi from "./index";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        findAll: builder.query<User[], void>({
            query: () => `users`,
        }),
    }),
})

export default userApi;