import React from 'react';
import { Link } from 'react-router-dom';

const PastoralSystem = () => {
  return (
    <section className="pastoral-system">
      <div className="story-container">
        <div className="story-text">
          <p className="story-subtitle">CRIADAS EN LIBERTAD</p>
          <h3 className="story-title">SISTEMA PASTORIL</h3>
          <p>En Zampa, nuestras ovejas se alimentan mediante un sistema pastoril en los fértiles campos de Napaleofú. Este enfoque respeta el bienestar animal y los ciclos naturales, permitiéndoles pastar al aire libre durante todo el año.</p>
          <p>La alimentación natural y libre de estrés no solo asegura una vida más saludable para nuestro rebaño, sino que se refleja directamente en la calidad y el sabor excepcional de nuestra leche, dando lugar a quesos con un carácter único y auténtico.</p>
          <Link to="/nosotros" className="btn btn-primary">DESCUBRE MÁS</Link>
        </div>
        <div className="pastoral-video">
          <video 
            src="assets/Quesos Zampa/IMG_1145.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default PastoralSystem;
