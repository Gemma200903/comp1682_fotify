import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    captionForPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate omnis ipsa similique corrupti, impedit autem quisquam doloribus natus sit voluptate numquam, libero quibusdam facilis, qui reiciendis alias culpa velit cumque ea. Dignissimos numquam minima pariatur, enim voluptatum vel adipisci officia eaque iste quaerat vero quibusdam dolorem? Dolorem cum exercitationem minima dolore nulla repellendus commodi, saepe suscipit!",
    isExpanded: false,
    maxLength: 85,

}

const bodyCompSlice = createSlice({
  name: "bodyCompSlice",
  initialState,
  reducers: {
    toggleCaptionForPost: (state)=>{
        state.isExpanded = !state.isExpanded;
    }
  }
});

export const {toggleCaptionForPost} = bodyCompSlice.actions

export default bodyCompSlice.reducer