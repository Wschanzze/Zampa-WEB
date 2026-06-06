import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopOccasion from './components/ShopOccasion';
import BannerBW from './components/BannerBW';
import OurStory from './components/OurStory';
import NewArrivals from './components/NewArrivals';
import JoinFamily from './components/JoinFamily';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';
import ToastContainer from './components/ToastContainer';

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Navbar />
        <Hero />
        <ShopOccasion />
        <BannerBW />
        <OurStory />
        <NewArrivals />
        <JoinFamily />
        <Footer />
        <Cart />
        <ProductModal />
        <ToastContainer />
      </div>
    </AppProvider>
  );
}

export default App;
