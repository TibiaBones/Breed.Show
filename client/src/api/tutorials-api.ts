import baseApi from "./index";

export const tutorialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        findAll: builder.query<Tutorial[], void>({
            query: () => `tutorials`,
        }),
    }),
})

export default tutorialApi;