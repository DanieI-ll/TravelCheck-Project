import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import CityPage from './CityPage/CityPage';
import Contacts from './Contacts/Contacts';
import CityDetails from './CityDetails/CityDetails'

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cities" element={<CityPage />} />
      <Route path="/city/:id" element={<CityDetails />} />
    </Routes>
  );
};

export default Navigation;
