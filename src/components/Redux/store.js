import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist'
import {persistSliceContacts} from './sliceContacts';

export const store=configureStore({
    reducer:  {
            contacts:persistSliceContacts,
        },
    },
)

export const persistor = persistStore(store)