import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactSlice";
import { filter } from './reducers';

// import {
//     configureStore,
//     getDefaultMiddleware,
//     combineReducers,
// } from '@reduxjs/toolkit';

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

// const middleware = [
//     ...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// ];

// const rootReducer = combineReducers({ contacts, filter });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware,
// });

// export const persistor = persistStore(store);

export const store = configureStore({
    reducer: { [contactsApi.reducerPath]: contactsApi.reducer, filter },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
});