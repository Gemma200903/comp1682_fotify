import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    width: 'w-56',
    logo: 'Fotify',
    titleItem: [

        {home: "Home", search: "Search", explore: "Explore", notifications: "Notifications", create: "Create", saved: "Saved", more: "More" }
        
    ],
    searchHidden: 'hidden'


}

const navBarSlice = createSlice({
  name: "navBarSlice",
  initialState,
  reducers: {

    changeNav: (state) =>{

        if (state.width === 'w-56') {
            state.width = 'w-20'; 
            state.titleItem = state.titleItem.map(() => ({
              home: "",
              search: "",
              explore: "",
              notifications: "",
              create: "",
              saved: "",
              more: ""
            }));
            state.logo = '<i class="fa-thin fa-mosquito"></i>'; 
            state.searchHidden = "";
          } else {
            state.width = 'w-56';
            state.titleItem = state.titleItem.map(() => ({
              home: "Home",
              search: "Search",
              explore: "Explore",
              notifications: "Notifications",
              create: "Create",
              saved: "Saved",
              more: "More"
            }));
            state.logo = 'Fotify';
            state.searchHidden = "hidden";
          }

  }
  }
});

export const {changeNav} = navBarSlice.actions

export default navBarSlice.reducer