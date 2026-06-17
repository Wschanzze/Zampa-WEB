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
        <p className="section-subtitle">PARA CADA MOMENTO, UN SABOR ÚNICO</p>
        <h3 className="section-title">COMPRA POR OCASIÓN</h3>
      </div>
      <div className="occasion-grid">
        
        <div 
          className={`occasion-card ${categoryFilter === 'mesa-diaria' ? 'active' : ''}`}
          onClick={() => handleFilterToggle('mesa-diaria')}
        >
          <div className="card-img-wrapper" style={{ border: categoryFilter === 'mesa-diaria' ? '2px solid var(--clr-accent)' : 'none' }}>
            <img src="assets/Quesos Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg" alt="Mesa de todos los días" />
          </div>
          <h4 className="card-title" style={{ justifyContent: 'center' }}>MESA DE TODOS LOS DÍAS</h4>
        </div>

        <div 
          className={`occasion-card ${categoryFilter === 'picadas' ? 'active' : ''}`}
          onClick={() => handleFilterToggle('picadas')}
        >
          <div className="card-img-wrapper" style={{ border: categoryFilter === 'picadas' ? '2px solid var(--clr-accent)' : 'none' }}>
            <img src="assets/Quesos Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg" alt="Picadas y Eventos" />
          </div>
          <h4 className="card-title" style={{ justifyContent: 'center' }}>PICADAS Y EVENTOS</h4>
        </div>

        <div 
          className={`occasion-card ${categoryFilter === 'alta-cocina' ? 'active' : ''}`}
          onClick={() => handleFilterToggle('alta-cocina')}
        >
          <div className="card-img-wrapper" style={{ border: categoryFilter === 'alta-cocina' ? '2px solid var(--clr-accent)' : 'none' }}>
            <img src="assets/Quesos Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg" alt="Alta Cocina" />
          </div>
          <h4 className="card-title" style={{ justifyContent: 'center' }}>ALTA COCINA</h4>
        </div>

      </div>
    </section>
  );
};

export default ShopOccasion;
