import React from 'react';
import { useApp } from '../context/AppContext';

const OurStory = () => {
  const { addToast } = useApp();

  const handleReadStory = (e) => {
    e.preventDefault();
    addToast("Cargando nuestra historia completa... (Simulado)");
  };

  return (
    <section className="our-story" id="about">
      <div className="story-container">
        <div className="story-image">
          <img 
            src="assets/Quesos Zampa/IMG_9879.JPG" 
            alt="Juan Cruz e Isabel" 
          />
        </div>
        <div className="story-text">
          <p className="story-subtitle">TANDIL, ARGENTINA</p>
          <h3 className="story-title">NUESTRA HISTORIA</h3>
          <p>Zampa nació hace tres años como un proyecto de vida compartido por Juan Cruz e Isabel, tras adquirir nuestras primeras 40 borregas frisonas lecheras. El nombre rinde homenaje al arbusto del sur argentino, asociado a la gran calidad del ganado ovino.</p>
          <p>Somos un emprendimiento familiar con base en Napaleofú que integra todo el proceso: desde la cría de ovejas bajo un sistema pastoril y ordeñe diario, hasta la elaboración de quesos de alta calidad.</p>
          <p>Hoy en día contamos con nuestra propia quesería, enfocándonos en un modelo de valor agregado en origen y apostando por la excelencia en la maduración, como nuestro emblemático Pecorino.</p>
          <a href="#" className="btn btn-secondary" onClick={handleReadStory}>LEER MÁS SOBRE NOSOTROS</a>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
