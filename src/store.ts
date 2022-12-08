import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { baseApi } from './services/base.service';

const reducer = combineReducers({
	// Added API generated reducer
	[baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
