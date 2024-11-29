import React from 'react'
import SearchComponent from '../../component/NavBarComponent/SearchComponent'
import { useSelector } from 'react-redux'

const SearchPage = () => {
  const {searchHidden} = useSelector((state)=>state.navBarReducer)
  return (
    <div className={`${searchHidden}`}>
        <SearchComponent></SearchComponent>
    </div>
  )
}

export default SearchPage