import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputData: {
    userName: "",
    emailU: "",
    pass: "",
    confirmPass: "",
  },
  errors: {},
};

const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState,
  reducers: {
    updateField: (state, action) => { 
        const {field, value} = action.payload;
        state.inputData[field] = value;
     },

    setErrors: (state, action) => { 
        state.errors = action.payload;
     },

    clearInput: (state) => { 
        state.inputData = initialState.inputData;
        state.errors = {};
     }
  },
});

export const {updateField, setErrors, clearForm} = signUpSlice.actions;

export default signUpSlice.reducer;
