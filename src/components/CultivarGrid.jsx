import React, { useEffect, useRef, useState } from 'react';

const cultivars = [
  {
    id: 'cul-001',
    name: 'Queso Tipo Pecorino',
    region: 'elaboración tradicional',
    yieldGain: 'Queso duro de oveja estilo italiano. Presentaciones: 3-6 meses, 6-12 meses, más de 12 meses de maduración. Pasta firme y granulada. Peso de referencia: 300g aprox.',
    droughtTolerance: 'Maduración variable',
    image: '/assets/Quesos Zampa/pecorino.jpeg',
    imageAlt: 'Queso Tipo Pecorino'
  },
  {
    id: 'cul-002',
    name: 'Queso Tipo Manchego',
    region: 'receta tradicional de pasta firme',
    yieldGain: 'Queso de oveja estilo manchego de pasta compacta. Presentaciones: 45 días-3 meses, 3-6 meses, 6-12 meses de maduración. Peso de referencia: 300g aprox.',
    droughtTolerance: 'Pasta compacta',
    image: '/assets/Quesos Zampa/IMG_9858.JPG',
    imageAlt: 'Queso Tipo Manchego'
  },
  {
    id: 'cul-003',
    name: 'Queso Ahumado',
    region: 'ahumado natural',
    yieldGain: 'Queso de oveja con proceso de ahumado natural. Ideal para acompañar fiambres intensos. Peso de referencia: 300g aprox.',
    droughtTolerance: 'Ahumado natural',
    image: '/assets/Quesos Zampa/IMG_9821.JPG',
    imageAlt: 'Queso Ahumado'
  },
  {
    id: 'cul-004',
    name: 'Queso Saborizado',
    region: 'orégano y ají',
    yieldGain: 'Queso de oveja saborizado con Orégano y Ají. Presencia de hierbas distribuidas en la pasta para un toque aromático. Peso de referencia: 300g aprox.',
    droughtTolerance: 'Saborizado',
    image: '/assets/Quesos Zampa/IMG_9824.JPG',
    imageAlt: 'Queso Saborizado'
  },
  {
    id: 'cul-005',
    name: 'Queso Provoleta',
    region: 'ideal para parrilla',
    yieldGain: 'Provoleta elaborada 100% con leche de oveja. Ideal para la parrilla, con una textura elástica y un sabor moderado. Peso de referencia: 200 - 250g.',
    droughtTolerance: 'Pasta hilada',
    image: '/assets/Quesos Zampa/tipos de quesos.jpg',
    imageAlt: 'Queso Provoleta'
  },
  {
    id: 'cul-006',
    name: 'Queso Camembert',
    region: 'especialidad de pasta blanda',
    yieldGain: 'Queso de pasta blanda con corteza enmohecida blanca. Textura untuosa y fundente con aromas lácticos intensos. Peso de referencia: 120 - 150g.',
    droughtTolerance: 'Corteza enmohecida',
    image: '/assets/Quesos Zampa/producto_3.png',
    imageAlt: 'Queso Camembert'
  },
  {
    id: 'cul-007',
    name: 'Queso Brie',
    region: 'estilo francés',
    yieldGain: 'De estilo clásico francés y corteza aterciopelada blanca. Queso sumamente cremoso con matices de sabor complejos. Peso de referencia: 150 - 180g.',
    droughtTolerance: 'Cremoso y untuoso',
    image: '/assets/Quesos Zampa/producto_2.png',
    imageAlt: 'Queso Brie'
  },
  {
    id: 'cul-008',
    name: 'Queso Ricota',
    region: 'fresco y suave',
    yieldGain: 'Ricota fresca de leche de oveja. Textura suave e ideal para preparaciones tanto dulces como saladas. Peso de referencia: 350 - 400g.',
    droughtTolerance: 'Queso fresco',
    image: '/assets/Quesos Zampa/producto_1.png',
    imageAlt: 'Queso Ricota'
  }
];

export default function CultivarGrid() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInquire = (cheeseName) => {
    const message = `¡Hola, equipo de Zampa! 🧀\n\nMe gustaría recibir más información o consultar precio del *${cheeseName}*.`;
    window.open(`https://wa.me/5491132554757?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="cultivars" ref={sectionRef} className="cultivar-section">

      <div className="cultivar-container">
        {/* List of Products */}
        <div className="cultivar-list">
          {cultivars.map((cultivar, index) => (
            <div
              key={cultivar.id}
              className={`cultivar-item transition-reveal ${visible ? 'reveal-active' : ''}`}
              style={{
                transitionDelay: visible ? `${index * 120}ms` : '0ms'
              }}
            >
              {/* Product Title */}
              <h3 className="cultivar-item-name">
                {cultivar.name}
              </h3>

              {/* Product Content Row */}
              <div className="cultivar-item-row">
                
                {/* Left: Description & Link */}
                <div className="cultivar-text-col">
                  <p className="cultivar-desc">
                    {cultivar.yieldGain}
                  </p>
                  
                  <button
                    onClick={() => handleInquire(cultivar.name)}
                    className="cultivar-link-btn"
                  >
                    Consultar por WhatsApp
                    <div className="cultivar-link-line" />
                  </button>
                </div>

                {/* Center: Image */}
                <div className="cultivar-image-col">
                  <img
                    src={cultivar.image}
                    alt={cultivar.imageAlt}
                    className="cultivar-img"
                  />
                </div>

                {/* Right: Technical Details */}
                <div className="cultivar-specs-col">
                  <div className="cultivar-spec-group">
                    <span className="cultivar-spec-label">
                      Maduración:
                    </span>
                    <span className="cultivar-spec-value-main">
                      {cultivar.droughtTolerance}
                    </span>
                  </div>
                  
                  <div className="cultivar-spec-group">
                    <span className="cultivar-spec-label">
                      Elaboración:
                    </span>
                    <span className="cultivar-spec-value">
                      Leche de oveja, {cultivar.region}
                    </span>
                  </div>

                  <div className="cultivar-spec-group">
                    <span className="cultivar-spec-label">
                      Notas de Cata:
                    </span>
                    <span className="cultivar-spec-value">
                      Textura única, aromas lácticos profundos y sabor complejo característico de Tandil.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wheat divider bottom */}
      <div className="wheat-rule-gradient mt-32" />
    </section>
  );
}
