import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        testReducer: (state = 1) => state,
    }
})