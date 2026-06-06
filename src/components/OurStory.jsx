import React from 'react';
import { useApp } from '../context/AppContext';

const OurStory = () => {
  const { addToast } = useApp();

  const handleReadStory = (e) => {
    e.preventDefault();
    addToast("Cargando nuestra historia completa... (Simulado)");
  };

  return (
    <section className="our-story" id="about">
      <div className="story-container">
        <div className="story-image">
          <img 
            src="/assets/images/story_keys_leather_1780357499838.png" 
            alt="Antique keys and worn leather" 
          />
        </div>
        <div className="story-text">
          <p className="story-subtitle">MADE IN THE USA</p>
          <h3 className="story-title">OUR STORY</h3>
          <p>Lucky U Strikes is a family-owned and operated business that has been serving the western community since 1989. We are a full-service ranch and roping supply store, carrying everything you need to keep your Western traditions alive.</p>
          <p>Our high-quality products and customer service set us apart from the competition, and we are committed to providing our customers with the best possible shopping experience.</p>
          <p>Whether you're looking for saddles, ropes, horseshoes, or just some good old fashioned advice, we've got you covered. Our knowledgeable staff is always happy to help you find what you need, and our prices are unbeatable. Stop by today and see for yourself!</p>
          <a href="#" className="btn btn-secondary" onClick={handleReadStory}>READ MORE ABOUT US</a>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
