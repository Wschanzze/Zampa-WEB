import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductParallaxSection from '../components/ProductParallaxSection';
import FeaturesIcons from '../components/FeaturesIcons';
import Introduction from '../components/Introduction';
import BannerBW from '../components/BannerBW';
import OurProducts from '../components/OurProducts';
import OurStory from '../components/OurStory';
import PastoralSystem from '../components/PastoralSystem';
import JoinFamily from '../components/JoinFamily';
import OurBenefits from '../components/OurBenefits';
import QuickContact from '../components/QuickContact';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeaturesIcons />
      <ProductParallaxSection />
      <Introduction />
      <BannerBW />
      <OurProducts />
      <OurStory />
      <PastoralSystem />
      <JoinFamily />
      <OurBenefits />
      <QuickContact />
    </>
  );
};

export default Home;
