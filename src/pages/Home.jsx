import React from 'react';
import PremiumHero from '../components/PremiumHero';
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
      <PremiumHero />
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
