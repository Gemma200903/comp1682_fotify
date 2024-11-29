import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNav } from "../../redux/navBarSlice/navBarSlice";

const NavBarComponent = () => {
  const { width, logo, titleItem } = useSelector((state) => state.navBarReducer);
  const dispatch = useDispatch();

  const [activeItem, setActiveItem] = useState("home");

  // Handle click to change active item
  const handleItemClick = (item) => {
    if (item === "search") {
      // Set active to 'search' and expand width
      setActiveItem("search");
      dispatch(changeNav()); // Mở rộng giao diện
    } else {
      // Reset active item and shrink back to default width
      setActiveItem(item);
      if (width === "w-20") {
        dispatch(changeNav()); // Thu nhỏ giao diện khi rời khỏi search
      }
    }
  };

  return (
    <div className={`navbar--content ${width}`}>
      <p className="logo" dangerouslySetInnerHTML={{ __html: logo }}></p>
      <ul>
        {/* Home Nav */}
        <li
          className={`text-title ${activeItem === "home" ? "font-bold" : "text-base"}`}
          onClick={() => handleItemClick("home")}
        >
          <i className="fa-thin fa-house-chimney icon--item" />
          <span className="text-subtitle">{titleItem[0].home}</span>
        </li>

        {/* Search Nav */}
        <li
          className={`text-title ${
            activeItem === "search" && width === "w-20" ? "border-active" : ""
          } ${activeItem === "search" ? "font-bold" : "text-base"}`}
          onClick={() => handleItemClick("search")}
        >
          <i className="fa-thin fa-magnifying-glass icon--item" />
          <span className="text-subtitle">{titleItem[0].search}</span>
        </li>

        {/* Explore Nav */}
        <li
          className={`text-title ${activeItem === "explore" ? "font-bold" : "text-base"}`}
          onClick={() => handleItemClick("explore")}
        >
          <i className="fa-thin fa-compass icon--item" />
          <span className="text-subtitle">{titleItem[0].explore}</span>
        </li>

        {/* Notifications Nav */}
        <li
          className={`text-title ${activeItem === "notifications" ? "font-bold" : "text-base"}`}
          onClick={() => handleItemClick("notifications")}
        >
          <i className="fa-sharp fa-thin fa-heart icon--item" />
          <span className="text-subtitle">{titleItem[0].notifications}</span>
        </li>

        {/* Create Nav */}
        <li
          className={`text-title ${activeItem === "create" ? "font-bold" : "text-base"}`}
          onClick={() => handleItemClick("create")}
        >
          <i className="fa-thin fa-square-plus icon--item" />
          <span className="text-subtitle">{titleItem[0].create}</span>
        </li>

        {/* Saved Nav */}
        <li
          className={`text-title ${activeItem === "saved" ? "font-bold" : "text-base"}`}
          onClick={() => handleItemClick("saved")}
        >
          <i className="fa-sharp fa-thin fa-bookmark icon--item" />
          <span className="text-subtitle">{titleItem[0].saved}</span>
        </li>

        {/* More Nav */}
        <li
          className={`text-title ${activeItem === "more" ? "font-bold" : "text-base"}`}
          onClick={() => handleItemClick("more")}
        >
          <i className="fa-sharp fa-thin fa-bars icon--item" />
          <span className="text-subtitle">{titleItem[0].more}</span>
        </li>
      </ul>
    </div>
  );
};

export default NavBarComponent;
