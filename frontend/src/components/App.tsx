import { BrowserRouter } from 'react-router-dom';

import Header from './layouts/Header/Header';
import Navigation from './pages/Navigation';
import Footer from './layouts/Footer/Footer';

import '../styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
