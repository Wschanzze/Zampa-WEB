import React from 'react';
import HeroSlider from '../components/HeroSlider';
import IntroStatement from '../components/IntroStatement';
import BannerBW from '../components/BannerBW';
import Introduction from '../components/Introduction';
import OurProducts from '../components/OurProducts';
import PastoralSystem from '../components/PastoralSystem';
import JoinFamily from '../components/JoinFamily';
import QuickContact from '../components/QuickContact';
import InstagramCarousel from '../components/InstagramCarousel';
import VisitSection from '../components/VisitSection';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <IntroStatement />
      <OurProducts />
      <BannerBW />
      <Introduction />
      <PastoralSystem />
      <VisitSection />
      <JoinFamily />
      <InstagramCarousel />
      <QuickContact />
    </>
  );
};

export default Home;
