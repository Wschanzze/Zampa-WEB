import React from 'react';
import BestSellers from '../components/BestSellers';
import SignatureCollection from '../components/SignatureCollection';
import CultivarGrid from '../components/CultivarGrid';

const Productos = () => {
  return (
    <div className="productos-page" style={{ padding: '0 0 2rem', backgroundColor: 'var(--clr-bg)' }}>
      <CultivarGrid />
      <BestSellers />
      <SignatureCollection />
    </div>
  );
};

export default Productos;
