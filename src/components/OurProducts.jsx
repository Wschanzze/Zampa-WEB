import React from 'react';

const OurProducts = () => {
  const categories = [
    {
      title: "Quesos Duros",
      image: "/assets/Quesos Zampa/IMG_9816.JPG",
      link: "#"
    },
    {
      title: "Quesos Semi-Duros",
      image: "/assets/Quesos Zampa/IMG_9824.JPG",
      link: "#"
    },
    {
      title: "Especialidades",
      image: "/assets/Quesos Zampa/tipos de quesos.jpg",
      link: "#"
    }
  ];

  return (
    <section className="our-products-section">
      <div className="products-heading">
        <h6 className="products-subtitle">NUESTROS PRODUCTOS</h6>
        <h2 className="products-title">Lácteos Naturales</h2>
      </div>

      <div className="products-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="product-card">
            <a href={cat.link} className="product-link">
              <div className="product-img-wrapper">
                <img src={cat.image} alt={cat.title} className="product-img" />
              </div>
              <div className="product-title-wrapper">
                <h6 className="product-category-title">{cat.title}</h6>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
