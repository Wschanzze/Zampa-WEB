import React from 'react';
import { Link } from 'react-router-dom';

const IntroStatement = () => {
  return (
    <section className="intro-statement-section">
      <div className="intro-statement-container">
        <div className="statement-ornament">*</div>
        <h2 className="statement-title">
          Frescura y naturalidad<br />
          son los principios de nuestra producción
        </h2>
        <p className="statement-description">
          Desde el pastoreo libre de nuestras ovejas en las sierras de Napaleofú hasta la maduración en nuestra cava. Cada horma se elabora manualmente con paciencia, respetando los tiempos de la naturaleza para lograr un queso premium y honesto.
        </p>
        <Link to="/nuestra-historia" className="btn btn-primary">
          Conocé nuestra historia
        </Link>
        <div className="statement-ornament">*</div>
      </div>
      <img 
        src="/assets/Quesos Zampa/ovejas_render.png" 
        alt="Ovejas en Napaleofú" 
        className="statement-watermark" 
      />
    </section>
  );
};

export default IntroStatement;
