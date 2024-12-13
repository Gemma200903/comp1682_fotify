import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeNav } from "../../redux/navBarSlice/navBarSlice";

const NavBarComponent = () => {
  const { width, logo, home, search, explore, notifications, create, saved, profile, settings } = useSelector(
    (state) => state.navBarReducer
  );

  const dispatch = useDispatch();

  const renderHomePage = () => {
    dispatch(changeNav("home"));
  };

  const renderExplorePage = () => {
    dispatch(changeNav("explore"));
  };

  const renderNotificationsPage = () => {
    dispatch(changeNav("notifications"));
  };

  const renderCreatePage = () => {
    dispatch(changeNav("create"));
  };

  const renderProfilePage = () => {
    dispatch(changeNav("profile"));
  };

  const renderSavedPage = () => {
    dispatch(changeNav("saved"));
  };

  const renderSettingsPage = () => {
    dispatch(changeNav("settings"));
  };

  const renderSearchPage = () => {
    dispatch(changeNav("search"));
  };

  return (
    <div>
      <div className={`navbar--content ${width}`}>
      <div className="logo">
        {logo ? <i className={`icon ${logo}`}></i> : <span>Fotify</span>}
      </div>

      <ul>

        {/* home */}
        <li onClick={renderHomePage}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-bold" : "text-base")}
          >
            <i className="fa-thin fa-house-chimney icon--item" />
            <span className="text-subtitle">{home}</span>
          </NavLink>
        </li>


        {/* search */}
        <li
          onClick={renderSearchPage}
          className={`navbar-item ${
            width === "w-20" ? "border border-zinc-400" : ""
          }`}
        >
          <NavLink
            to="/Search"
            className={({ isActive }) => (isActive ? "font-bold" : "text-base")}
          >
            <i className="fa-thin fa-magnifying-glass icon--item" />
            <span className="text-subtitle">{search}</span>
          </NavLink>
        </li>


         {/* Explore */}
         <li onClick={renderExplorePage}>
          <NavLink
            to="/Explore"
            className={({ isActive }) => (isActive ? "font-bold" : "text-base")}
          >
            <i className="fa-thin fa-compass icon--item" />
            <span className="text-subtitle">{explore}</span>
          </NavLink>
        </li>


          {/* notifications */}
         <li onClick={renderNotificationsPage}>
          <NavLink
            to="/Notifications"
            className={({ isActive }) => (isActive ? "font-bold" : "text-base")}
          >
            <i className="fa-sharp fa-thin fa-heart icon--item" />
            <span className="text-subtitle">{notifications}</span>
          </NavLink>
        </li>


          {/* create */}
         <li onClick={renderCreatePage}>
          <NavLink
            to="/Create"
            className={({ isActive }) => (isActive ? "font-bold" : "text-base")}
          >
             <i className="fa-thin fa-square-plus icon--item" />
            <span className="text-subtitle">{create}</span>
          </NavLink>
        </li>


          {/* saved */}
         <li onClick={renderSavedPage}>
          <NavLink
            to="/Saved"
            className={({ isActive }) => (isActive ? "font-bold" : "text-base")}
          >
             <i className="fa-sharp fa-thin fa-bookmark icon--item" />
            <span className="text-subtitle">{saved}</span>
          </NavLink>
        </li>

          {/* profile */}
         <li onClick={renderProfilePage}>
          <NavLink
            to="/Profile"
            className={({ isActive }) => (isActive ? "font-bold" : "text-base")}
          >
             <i className="fa-sharp fa-thin fa-user icon--item" />
            <span className="text-subtitle">{profile}</span>
          </NavLink>
        </li>


          {/*settings */}
         <li onClick={renderSettingsPage}>
          <NavLink
            to="/Profile"
            className={({ isActive }) => (isActive ? "font-bold" : "text-base")}
          >
             <i className="fa-sharp fa-thin fa-gear icon--item" />
            <span className="text-subtitle">{settings}</span>
          </NavLink>
        </li>





      </ul>
    </div>

    </div>
    
  );
};

export default NavBarComponent;
