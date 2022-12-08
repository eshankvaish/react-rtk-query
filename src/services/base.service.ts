import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Base API service to be used across the application.
 * Endpoints can be injected using the .injectEndpoints method.
 */
export const baseApi = createApi({
	reducerPath: 'baseApiReducer',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
		/*
		 * This is added to timeout the API in cas eno response is received in 10s
		 */
		timeout: 10000,
	}),
	endpoints: () => ({}),
});
