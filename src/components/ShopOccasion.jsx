import React from 'react';
import { useApp } from '../context/AppContext';

const ShopOccasion = () => {
  const { categoryFilter, setCategoryFilter } = useApp();

  const handleFilterToggle = (category) => {
    if (categoryFilter === category) {
      setCategoryFilter('all'); // toggle off
    } else {
      setCategoryFilter(category);
      // scroll to new arrivals
      const el = document.getElementById('new-arrivals');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="shop-occasion" id="shop">
      <div className="section-header">
        <p className="section-subtitle">WHATEVER SEASON YOU'RE IN, WE HAVE YOU COVERED</p>
        <h3 className="section-title">SHOP BY OCCASION</h3>
      </div>
      <div className="occasion-grid">
        
        <div 
          className={`occasion-card ${categoryFilter === 'working-attire' ? 'active' : ''}`}
          onClick={() => handleFilterToggle('working-attire')}
        >
          <div className="card-img-wrapper" style={{ border: categoryFilter === 'working-attire' ? '2px solid var(--clr-accent)' : 'none' }}>
            <img src="/assets/images/cat_boots_1780357545969.png" alt="Working Attire" />
          </div>
          <h4 className="card-title" style={{ justifyContent: 'center' }}>WORKING ATTIRE</h4>
        </div>

        <div 
          className={`occasion-card ${categoryFilter === 'ranching-supplies' ? 'active' : ''}`}
          onClick={() => handleFilterToggle('ranching-supplies')}
        >
          <div className="card-img-wrapper" style={{ border: categoryFilter === 'ranching-supplies' ? '2px solid var(--clr-accent)' : 'none' }}>
            <img src="/assets/images/cat_person_horse_1780357558930.png" alt="Ranching Supplies" />
          </div>
          <h4 className="card-title" style={{ justifyContent: 'center' }}>RANCHING SUPPLIES</h4>
        </div>

        <div 
          className={`occasion-card ${categoryFilter === 'everyday-riding' ? 'active' : ''}`}
          onClick={() => handleFilterToggle('everyday-riding')}
        >
          <div className="card-img-wrapper" style={{ border: categoryFilter === 'everyday-riding' ? '2px solid var(--clr-accent)' : 'none' }}>
            <img src="/assets/images/cat_saddle_1780357575847.png" alt="Everyday Riding" />
          </div>
          <h4 className="card-title" style={{ justifyContent: 'center' }}>EVERYDAY RIDING</h4>
        </div>

      </div>
    </section>
  );
};

export default ShopOccasion;
