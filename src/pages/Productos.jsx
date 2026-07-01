import React from 'react';
import BestSellers from '../components/BestSellers';
import SignatureCollection from '../components/SignatureCollection';
import DecoratedTitle from '../components/DecoratedTitle';
import CultivarGrid from '../components/CultivarGrid';

const Productos = () => {
  return (
    <div className="productos-page" style={{ padding: '6rem 0 2rem', backgroundColor: 'var(--clr-bg)' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p className="section-subtitle">NUESTRA COLECCIÓN</p>
        <DecoratedTitle className="section-title">Quesos de Oveja</DecoratedTitle>
        <p className="section-description" style={{ maxWidth: '700px', margin: '1rem auto 0', color: 'var(--clr-text-light)' }}>
          Elaborados artesanalmente en Tandil con leche 100% de ovejas pastoriles. 
          Cada horma es el resultado de un cuidado minucioso en cada etapa del proceso.
        </p>
      </div>
      <BestSellers />
      <SignatureCollection />
      <CultivarGrid />
    </div>
  );
};

export default Productos;
