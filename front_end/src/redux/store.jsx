import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./navBarSlice/navBarSlice";
import searchSlice from "./searchSlice/searchSlice";


export const store = configureStore({
    reducer:{
        // testReducer: (state = 1) => state,

        // All state here

        navBarReducer: navBarSlice,

        searchReducer: searchSlice,
        
    }
})