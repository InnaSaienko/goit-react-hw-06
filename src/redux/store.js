import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filtersSlice from "./filtersSlice.js";
import contactsSlice from "./contactsSlice.js";

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(persistConfig, contactsSlice), // save to local store
        filters: filtersSlice,
    },
    devTools:  import.meta.env.MODE === 'development',
});

export const persistor = persistStore(store);