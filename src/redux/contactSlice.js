import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://63a801cdf4962215b5793313.mockapi.io/contacts/',
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => `contacts`,
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: values => ({
                url: 'contacts',
                method: 'POST',
                body: values,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = contactsApi;