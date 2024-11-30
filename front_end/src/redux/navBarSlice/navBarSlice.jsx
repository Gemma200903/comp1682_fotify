import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: "w-56",
  logo: "",
  home: "Home",
  search: "Search",
  explore: "Explore",
  notifications: "Notifications",
  create: "Create",
  saved: "Saved",
  profile: "Profile",
  settings: "Settings",
  seacrchHidden: "hidden",
};

const navBarSlice = createSlice({
  name: "navBarSlice",
  initialState,
  reducers: {
    changeNav: (state, action) => {
      // console.log("ok");

     

      if (action.payload === "search") {
        let newValues = {
          "w-56": {
            width: "w-20",
            logo: "fa-thin fa-squirrel", //<i className="fa-thin fa-squirrel" />
            home: "",
            search: "",
            explore: "",
            notifications: "",
            create: "",
            saved: "",
            profile: "",
            settings: "",
            seacrchHidden: "",
          },
          "w-20": {
            width: "w-56",
            logo: "", 
            home: "Home",
            search: "Search",
            explore: "Explore",
            notifications: "Notifications",
            create: "Create",
            saved: "Saved",
            profile: "Profile",
            settings: "Settings",
            seacrchHidden: "hidden",
          },
        };

        const currentState = newValues[state.width];
        if (currentState) {
          Object.assign(state, currentState);
          console.log("currentState", currentState);
        }
      } else {
        
        state.width = "w-56";
        state.logo = "";
        state.home = "Home";
        state.search = "Search";
        state.explore = "Explore";
        state.notifications= "Notifications";
        state.create= "Create";
        state.saved= "Saved";
        state.profile= "Profile";
        state.settings= "Settings";
        state.seacrchHidden = "hidden";
      }
    },
  },
});

export const { changeNav } = navBarSlice.actions;

export default navBarSlice.reducer;

{
  /* <ul>
    
  

   
   


    

    <li
      className={`text-title ${activeItem === "profile" ? "font-bold" : "text-base"}`}
      onClick={() => handleItemClick("profile")}
    >
      <i className="fa-sharp fa-thin fa-user icon--item" />

      
      <span className="text-subtitle">{titleItem[0].profile}</span>
    </li>

    
    <li
      className={`text-title ${activeItem === "settings" ? "font-bold" : "text-base"}`}
      onClick={() => handleItemClick("settings")}
    >
     <i className="fa-sharp fa-thin fa-gear icon--item" />


      
      <span className="text-subtitle">{titleItem[0].settings}</span>
    </li>
  </ul> */
}
