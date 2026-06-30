import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductParallaxSection from '../components/ProductParallaxSection';
import FeaturesIcons from '../components/FeaturesIcons';
import BestSellers from '../components/BestSellers';
import BannerBW from '../components/BannerBW';
import Introduction from '../components/Introduction';
import OurProducts from '../components/OurProducts';
import RecipesPairings from '../components/RecipesPairings';
import PastoralSystem from '../components/PastoralSystem';
import JoinFamily from '../components/JoinFamily';
import OurBenefits from '../components/OurBenefits';
import QuickContact from '../components/QuickContact';
import InstagramCarousel from '../components/InstagramCarousel';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeaturesIcons />
      <BestSellers />
      <ProductParallaxSection />
      <BannerBW />
      <Introduction />
      <OurProducts />
      <RecipesPairings />
      <PastoralSystem />
      <JoinFamily />
      <OurBenefits />
      <InstagramCarousel />
      <QuickContact />
    </>
  );
};

export default Home;
