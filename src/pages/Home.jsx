import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Introduction from '../components/Introduction';
import BannerBW from '../components/BannerBW';
import OurStory from '../components/OurStory';
import PastoralSystem from '../components/PastoralSystem';
import JoinFamily from '../components/JoinFamily';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Introduction />
      <BannerBW />
      <OurStory />
      <PastoralSystem />
      <JoinFamily />
    </>
  );
};

export default Home;
