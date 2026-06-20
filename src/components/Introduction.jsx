import React from 'react';

const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-header">
          <span className="intro-subtitle">FILOSOFÍA ZAMPA</span>
          <h2 className="intro-title">Nuestra Vocación</h2>
          <div className="intro-title-line"></div>
        </div>
        
        <div className="intro-grid">
          <div className="intro-pillar">
            <span className="pillar-number">I</span>
            <h3>Respeto Pastoril</h3>
            <p>
              Nuestras ovejas frisonas lecheras se crían en libertad en los ricos campos de Napaleofú. 
              Una alimentación 100% natural y libre de estrés es la base indispensable para obtener una 
              leche premium de variante caseína A2, notablemente superior y más digerible.
            </p>
          </div>
          
          <div className="intro-pillar">
            <span className="pillar-number">II</span>
            <h3>Elaboración de Autor</h3>
            <p>
              Elaboramos cada queso en partidas limitadas y numeradas, moldeando cada pieza manualmente. 
              Respetamos los tiempos naturales de maduración en nuestra cava para conseguir texturas, 
              aromas y sabores complejos, dignos de la alta cocina.
            </p>
          </div>
          
          <div className="intro-pillar">
            <span className="pillar-number">III</span>
            <h3>Orgullo Local</h3>
            <p>
              Apostamos al valor agregado en origen integrando todo el proceso desde el ordeñe hasta la mesa. 
              Nuestra pasión es honrar y enriquecer la tradición quesera artesanal de Tandil, impulsando 
              el trabajo de nuestra comunidad local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
