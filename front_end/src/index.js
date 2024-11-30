import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import ExplorePage from './page/Explore';
import HomePage from './page/Home';
import SearchPage from './page/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Route chính của HomePage */}
          <Route index element={<HomePage />} />

          {/* Route con cho SearchPage */}
          <Route path="Search" element={<SearchPage />} />

          <Route path="Explore" element={<ExplorePage></ExplorePage>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
