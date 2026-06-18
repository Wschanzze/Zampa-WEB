import React from 'react';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import SignatureCollection from '../components/SignatureCollection';
import ShopOccasion from '../components/ShopOccasion';
import BannerBW from '../components/BannerBW';
import OurStory from '../components/OurStory';
import PastoralSystem from '../components/PastoralSystem';
import JoinFamily from '../components/JoinFamily';

const Home = () => {
  return (
    <>
      <Hero />
      <BestSellers />
      <SignatureCollection />
      <BannerBW />
      <OurStory />
      <PastoralSystem />
      <JoinFamily />
    </>
  );
};

export default Home;
