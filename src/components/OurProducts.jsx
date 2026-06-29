import React from 'react';
import DecoratedTitle from './DecoratedTitle';

const OurProducts = () => {
  const categories = [
    {
      title: "Línea Clásica",
      image: "/assets/Quesos Zampa/pecorino.jpeg",
      link: "/productos#clasica"
    },
    {
      title: "Quesos Madurados",
      image: "/assets/Quesos Zampa/IMG_9816.JPG",
      link: "/productos#madurados"
    },
    {
      title: "Especialidades",
      image: "/assets/Quesos Zampa/tipos de quesos.jpg",
      link: "/productos#especialidades"
    }
  ];

  return (
    <section className="our-products-section">
      <div className="products-heading">
        <h6 className="products-subtitle">NUESTROS PRODUCTOS</h6>
        <DecoratedTitle className="products-title">100% Leche de Oveja</DecoratedTitle>
      </div>

      <div className="products-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="product-card">
            <a href={cat.link} className="product-link">
              <div className="product-img-wrapper">
                <img src={cat.image} alt={cat.title} className="product-img" />
                <div className="product-overlay"></div>
                <div className="product-title-wrapper">
                  <h6 className="product-category-title">{cat.title}</h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
