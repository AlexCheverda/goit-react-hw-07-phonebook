// import { configureStore } from "@reduxjs/toolkit";
// import { createSlice } from '@reduxjs/toolkit';

// import { persistStore } from "redux-persist";
import { contacts, filter } from './reducers';

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: [],
//     reducers: {
//         increment(state, action) {
//             return state + action.payload;
//         },
//         decrement(state, action) {
//             return state - action.payload;
//         },
//     },
// });

// export const { increment, decrement } = contactsSlice.actions;

// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: "",
//     reducers: {
//         addContact(state, action) {
//             state.push(action.payload);
//         },
//         deleteContact(state, action) {
//             return state.filter(filter => filter.id !== action.payload);
//         },
//     },
// });

// export const { addContact, deleteContact } = filterSlice.actions;

// export const store = configureStore({
//     reducer: {
//         contacts: contactsSlice.reducer,
//         filter: filterSlice.reducer,
//     },
// });
import {
    configureStore,
    getDefaultMiddleware,
    combineReducers,
} from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const rootReducer = combineReducers({ contacts, filter });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware,
});

export const persistor = persistStore(store);