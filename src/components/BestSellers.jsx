import React from 'react';
import { useApp } from '../context/AppContext';
import DecoratedTitle from './DecoratedTitle';

const BestSellers = () => {
  const { addToCart } = useApp();

  const bestSellers = [
    {
      id: 101,
      name: 'Queso Tipo Pecorino',
      description: 'Queso duro estilo italiano, maduración variable (3 a >12 meses).',
      image: '/assets/Quesos Zampa/pecorino.jpeg',
      badge: 'Clásico'
    },
    {
      id: 102,
      name: 'Queso Ahumado',
      description: 'Queso de oveja con proceso de ahumado natural.',
      image: '/assets/Quesos Zampa/IMG_9821.JPG',
      badge: 'Premiado'
    },
    {
      id: 103,
      name: 'Queso Tipo Manchego',
      description: 'Estilo manchego tradicional, maduración variable (45 días a 12 meses).',
      image: '/assets/Quesos Zampa/IMG_9858.JPG',
      badge: 'Reserva'
    }
  ];

  return (
    <section className="best-sellers">
      <div className="best-sellers-header">
        <DecoratedTitle className="editorial-title">Destacados del Mes</DecoratedTitle>
        <p className="editorial-subtitle">100% Leche de Oveja. Quesos más nutritivos, digeribles y con un sabor único.</p>
      </div>

      <div className="best-sellers-grid">
        {bestSellers.map((product) => (
          <div key={product.id} className="best-seller-card">
            <div className="best-seller-badge-top">
              <span className="icon">✓</span> {product.badge}
            </div>
            
            <div className="best-seller-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className="best-seller-info">
              <h3 className="best-seller-name">{product.name}</h3>
              <p className="best-seller-desc">{product.description}</p>
              
              <div className="best-seller-actions">
                <button 
                  className="btn-add-minimal"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
