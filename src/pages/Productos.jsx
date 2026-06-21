import React from 'react';
import BestSellers from '../components/BestSellers';
import SignatureCollection from '../components/SignatureCollection';

const Productos = () => {
  return (
    <div className="productos-page" style={{ padding: '6rem 0 2rem', backgroundColor: 'var(--clr-bg)' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p className="section-subtitle">NUESTRA COLECCIÓN</p>
        <h2 className="section-title">Quesos de Oveja</h2>
        <p className="section-description" style={{ maxWidth: '700px', margin: '1rem auto 0', color: 'var(--clr-text-light)' }}>
          Elaborados artesanalmente en Tandil con leche 100% de ovejas pastoriles. 
          Cada horma es el resultado de un cuidado minucioso en cada etapa del proceso.
        </p>
      </div>
      <BestSellers />
      <SignatureCollection />
    </div>
  );
};

export default Productos;
