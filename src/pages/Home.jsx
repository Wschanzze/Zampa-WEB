import React from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import BannerBW from '../components/BannerBW';
import OurStory from '../components/OurStory';
import PastoralSystem from '../components/PastoralSystem';
import JoinFamily from '../components/JoinFamily';

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <BannerBW />
      <OurStory />
      <PastoralSystem />
      <JoinFamily />
    </>
  );
};

export default Home;
