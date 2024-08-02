// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../SliceStore/Slice'; // Correctly import the default export

export const Store = configureStore({
    reducer: {
        user: userReducer
    }
});
