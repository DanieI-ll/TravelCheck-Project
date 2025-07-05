import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import CityPage from './CityPage/CityPage';
import Contacts from './Contacts/Contacts';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cities" element={<CityPage />} />
    </Routes>
  );
};

export default Navigation;
