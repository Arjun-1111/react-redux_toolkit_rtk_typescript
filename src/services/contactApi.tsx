import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { contact } from '../models/contacts.models';

export const contactApi = createApi({
    reducerPath:'contactApi',
    tagTypes:['contact'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3006/'}),
    endpoints: (builder) => ({
        contacts: builder.query<contact[], void>({
            query: () => '/contacts',
            providesTags: ['contact']
        }),
        contact: builder.query<contact, string>({
            query: (id) => `contacts/${id}`,
            providesTags: ['contact']
        }),
        createContact: builder.mutation<void, contact>({
            query: (contact) =>({
                url: '/contacts',
                method:'POST',
                body: contact
            }),
            invalidatesTags: ['contact']
        }),
        updateContact: builder.mutation<void, contact>({
            query: ({id, ...rest}) => ({
                url: `contacts/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['contact']
        }),
        deleteContact: builder.mutation<void, string>({
            query: (id) => ({
                url:`contacts/${id}`,
                method:'DELETE',
            }),
            invalidatesTags: ['contact']
        })
    })
})

export const {useContactsQuery, useContactQuery, useCreateContactMutation, useDeleteContactMutation, useUpdateContactMutation} = contactApi;