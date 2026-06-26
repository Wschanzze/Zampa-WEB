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
import NuestraHistoria from './pages/NuestraHistoria';
import Elaboracion from './pages/Elaboracion';
import Comunidad from './pages/Comunidad';
import Revendedores from './pages/Revendedores';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
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
            <Route path="/nuestra-historia" element={<NuestraHistoria />} />
            <Route path="/elaboracion" element={<Elaboracion />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/revendedores" element={<Revendedores />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
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
