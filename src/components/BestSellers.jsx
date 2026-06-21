import React from 'react';
import { Link } from 'react-router-dom';

const BestSellers = () => {

  const bestSellers = [
    {
      id: 101,
      name: 'Pecorino Clásico',
      description: 'Queso de oveja madurado 6 meses',
      price: 18000,
      image: '/assets/Quesos Zampa/producto_1.png',
      badge: 'Sin lactosa'
    },
    {
      id: 102,
      name: 'Ahumado Natural',
      description: 'Ahumado con maderas nobles',
      price: 21000,
      image: '/assets/Quesos Zampa/producto_2.png',
      badge: 'Premiado'
    },
    {
      id: 103,
      name: 'Manchego Reserva',
      description: 'Madurado 12 meses',
      price: 25000,
      image: '/assets/Quesos Zampa/producto_3.png',
      badge: 'Sin lactosa'
    }
  ];

  return (
    <section className="best-sellers">
      <div className="best-sellers-header">
        <h2 className="editorial-title">Descubre nuestros más vendidos</h2>
        <p className="editorial-subtitle">Una selección de nuestros quesos más premiados y solicitados</p>
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
                <span className="best-seller-price">${product.price.toLocaleString()} / kg</span>
                <Link 
                  to="/contacto"
                  className="btn-add-minimal"
                >
                  Consultar Producto
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
