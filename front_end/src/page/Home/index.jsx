import React from 'react';
import NavBarComponent from '../../component/NavBarComponent/NavBarComponent';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homePage--content">
      <NavBarComponent />
      <Outlet /> {/* Đây là nơi hiển thị các route con như SearchPage */}
    </div>
  );
};

export default HomePage;
