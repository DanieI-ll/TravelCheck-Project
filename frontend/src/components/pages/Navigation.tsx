import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import CityPage from './CityPage/CityPage';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cities" element={<CityPage />} />
    </Routes>
  );
};

export default Navigation;
