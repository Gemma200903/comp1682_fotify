import React from 'react'
import NavBarComponent from '../../component/NavBarComponent/NavBarComponent'
import SearchPage from '../Search'

const HomePage = () => {
  return (
    <div className='homePage--content'>
      
      <NavBarComponent></NavBarComponent>
      <SearchPage></SearchPage>
    </div>
  )
}

export default HomePage