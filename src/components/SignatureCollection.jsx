import React from 'react';
import { Link } from 'react-router-dom';

const SignatureCollection = () => {
  return (
    <section className="signature-collection">
      <h2 className="signature-title uppercase">Pecorino de Autor</h2>
      
      <div className="signature-layout">
        <div className="signature-text-col">
          <p className="signature-description">
            Nuestra gama <strong>Pecorino de Autor</strong> representa la excelencia en quesos de leche cruda de oveja, cuidadosamente curados y madurados en nuestra cava subterránea. Galardonados internacionalmente, destacan por sus complejos matices y carácter único.
          </p>
          <Link to="/productos" className="link-editorial">Descubre Más <span className="line-arrow"></span></Link>
        </div>
        
        <div className="signature-image-col">
          <img src="/assets/Quesos Zampa/pecorino.jpeg" alt="Pecorino de Autor" />
        </div>
        
        <div className="signature-specs-col">
          <div className="spec-row">
            <span className="spec-label">Curación:</span>
            <span className="spec-value">8 meses</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Elaboración:</span>
            <span className="spec-value">Leche cruda de oveja frisona</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Notas:</span>
            <span className="spec-value">Aromas a frutos secos tostados, textura firme y cristalizada, sabor profundo y persistente que resalta la calidad de nuestra pastura.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
