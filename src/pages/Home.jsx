import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductParallaxSection from '../components/ProductParallaxSection';
import FeaturesIcons from '../components/FeaturesIcons';
import BestSellers from '../components/BestSellers';
import BannerBW from '../components/BannerBW';
import Introduction from '../components/Introduction';
import OurProducts from '../components/OurProducts';
import PastoralSystem from '../components/PastoralSystem';
import JoinFamily from '../components/JoinFamily';
import QuickContact from '../components/QuickContact';
import InstagramCarousel from '../components/InstagramCarousel';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeaturesIcons />
      <OurProducts />
      <ProductParallaxSection />
      <BannerBW />
      <Introduction />
      <BestSellers />
      <PastoralSystem />
      <JoinFamily />
      <InstagramCarousel />
      <QuickContact />
    </>
  );
};

export default Home;
