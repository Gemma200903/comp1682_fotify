import React from 'react';
import NavBarComponent from '../../component/NavBarComponent/NavBarComponent';
import { Outlet } from 'react-router-dom';
import FeedComponent from '../../component/FeedComponent/FeedComponent';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';


const HomePage = () => {
  return (
    <div className="homePage--content">
     


   
      <NavBarComponent />

      <FeedComponent></FeedComponent>
      

      <Outlet /> 
      
     
      
     

      
    </div>
  );
};

export default HomePage;
