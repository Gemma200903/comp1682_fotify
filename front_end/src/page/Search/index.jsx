import React from "react";
import SearchComponent from "../../component/NavBarComponent/SearchComponent";
import { useSelector } from "react-redux";

const SearchPage = () => {
  
  const {seacrchHidden} = useSelector((state)=>state.navBarReducer)

  return (
    <div
      className={`searchPage--item ${seacrchHidden}`}
    >
      <SearchComponent></SearchComponent>
    </div>
  );
};

export default SearchPage;
