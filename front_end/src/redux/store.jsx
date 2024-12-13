import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./navBarSlice/navBarSlice";
import bodyCompSlice from "./bodyCompSlice/bodyCompSlice";
import signUpSlice from "./signUpSlice/signUpSlice"
import searchSlice from "./searchSlice/searchSlice";



export const store = configureStore({
    reducer:{
        // testReducer: (state = 1) => state,

        // All state here

        navBarReducer: navBarSlice,

        bodyCompReducer: bodyCompSlice,
        
        signUpReducer: signUpSlice,

        searchReducer: searchSlice,
        
    }
})