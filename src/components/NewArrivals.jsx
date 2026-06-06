import React from 'react';
import productsData from '../data/products.json';
import { useApp } from '../context/AppContext';

const NewArrivals = () => {
  const { categoryFilter, openProductModal } = useApp();

  // Filter products based on selected category
  const filteredProducts = categoryFilter === 'all'
    ? productsData
    : productsData.filter(p => p.category === categoryFilter);

  return (
    <section className="new-arrivals" id="new-arrivals">
      <div className="section-header">
        <p className="section-subtitle">JUST IN</p>
        <h3 className="section-title">
          {categoryFilter === 'all' ? 'SHOP NEW ARRIVALS' : `NEW ARRIVALS - ${categoryFilter.replace('-', ' ')}`}
        </h3>
      </div>
      
      <div className="arrivals-grid">
        {filteredProducts.length === 0 ? (
          <p style={{ gridColumn: 'span 4', fontFamily: 'var(--font-sub)', color: 'var(--clr-text-light)' }}>
            No hay productos en esta categoría por ahora.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="arrival-card"
              onClick={() => openProductModal(product)}
            >
              <div className="card-img-wrapper">
                <img src={`/${product.image}`} alt={product.name} />
              </div>
              <h4 className="card-title">
                <span>{product.name}</span>
                <span className="card-price">${product.price.toFixed(2)}</span>
              </h4>
            </div>
          ))
        )}
      </div>
      
      <div className="center-btn">
        <a href="#shop" className="btn btn-secondary">BROWSE ALL</a>
      </div>
    </section>
  );
};

export default NewArrivals;
