import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';
import ToastContainer from './components/ToastContainer';

// Pages
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import ElChef from './pages/ElChef';
import Comunidad from './pages/Comunidad';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/el-chef" element={<ElChef />} />
            <Route path="/comunidad" element={<Comunidad />} />
          </Routes>
          <Footer />
          <Cart />
          <ProductModal />
          <ToastContainer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
