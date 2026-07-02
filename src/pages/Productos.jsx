import React from 'react';
import BestSellers from '../components/BestSellers';
import SignatureCollection from '../components/SignatureCollection';
import CultivarGrid from '../components/CultivarGrid';

const Productos = () => {
  return (
    <div className="productos-page" style={{ padding: '0 0 2rem', backgroundColor: 'var(--clr-bg)' }}>
      <header className="products-hero">
        <img 
          src="/assets/Quesos Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg" 
          alt="Quesos Zampa de Oveja" 
          className="products-hero-bg" 
        />
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <p className="hero-subtitle">NUESTRAS VARIEDADES</p>
          <h1 className="hero-title">Quesos de Oveja</h1>
          <p className="hero-description">
            Elaborados artesanalmente en Napaleofú, Tandil. Quesos 100% de leche de oveja bajo un sistema pastoril: más nutritivos, altamente digeribles y con un sabor único que refleja el carácter de nuestras pasturas.
          </p>
        </div>
      </header>
      <CultivarGrid />
      <BestSellers />
      <SignatureCollection />
    </div>
  );
};

export default Productos;
