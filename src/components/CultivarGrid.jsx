import React, { useEffect, useRef, useState } from 'react';

const cultivars = [
  {
    id: 'cul-001',
    name: 'Camembert de Oveja',
    region: 'elaboración artesanal en Napaleofú',
    yieldGain: 'Considerado la vedette de la casa. Un queso de pasta blanda con corteza enmohecida blanca, elaborado 100% con leche de oveja frisona fresca del día. Ofrece una textura interior untuosa y fundente con aromas lácticos intensos y complejos de nivel gastronómico premium.',
    droughtTolerance: 'Punto óptimo de maduración',
    image: '/assets/Quesos Zampa/producto_3.png',
    imageAlt: 'Queso Camembert de oveja Zampa en plato'
  },
  {
    id: 'cul-002',
    name: 'Queso Pecorino Zampa',
    region: 'guarda prolongada en cava ovinos',
    yieldGain: 'El gran desafío técnico y orgullo de nuestro tambo. Inspirado en la tradición italiana, es un queso de pasta dura o semidura elaborado con leche cruda y madurado lentamente en cava para desarrollar un sabor robusto, notas herbales y una textura firme y quebradiza.',
    droughtTolerance: '9 a 12 meses en cava',
    image: '/assets/Quesos Zampa/pecorino.jpeg',
    imageAlt: 'Queso Pecorino Zampa madurado rústico'
  },
  {
    id: 'cul-003',
    name: 'Brie de Oveja',
    region: 'elaboración tradicional de pasta blanda',
    yieldGain: 'De estilo clásico francés y corteza aterciopelada blanca. El Brie de oveja Zampa aprovecha la gran riqueza grasa de la leche frisona, logrando un queso sumamente cremoso y untuoso con matices de sabor más complejos y redondos que la versión vacuna.',
    droughtTolerance: 'Pasta blanda madurada',
    image: '/assets/Quesos Zampa/producto_2.png',
    imageAlt: 'Queso Brie de oveja Zampa cortado'
  },
  {
    id: 'cul-004',
    name: 'Manchego Artesanal',
    region: 'receta tradicional de pasta firme',
    yieldGain: 'Inspirado en la gran tradición española. Un queso de pasta semidura o dura que resalta el dulzor natural y los sutiles matices herbales de nuestras pasturas de Napaleofú. Su textura compacta y sabor limpio lo hacen el compañero ideal de fiambrerías finas.',
    droughtTolerance: 'Maduración prolongada',
    image: '/assets/Quesos Zampa/producto_1.png',
    imageAlt: 'Queso Manchego Zampa artesanal'
  },
  {
    id: 'cul-005',
    name: 'Provolone de Oveja',
    region: 'pasta hilada y semidura',
    yieldGain: 'Variedad de origen mediterráneo adaptada al perfil graso y rico de la leche ovina. Presenta una textura elástica y un sabor moderado que se vuelve más picante y redondo con el tiempo de maduración, ideal para tablas de quesos premium.',
    droughtTolerance: '3 a 6 meses de maduración',
    image: '/assets/Quesos Zampa/tipos de quesos.jpg',
    imageAlt: 'Cortes de queso Provolone Zampa'
  },
  {
    id: 'cul-006',
    name: 'Queso Ahumado',
    region: 'ahumado natural con maderas selectas',
    yieldGain: 'Queso de autor sometido a un ahumado natural lento que le otorga una distintiva corteza color caramelo. Este proceso añade notas ahumadas profundas que contrastan deliciosamente con la cremosidad láctica de la leche de oveja, logrando una experiencia gourmet única.',
    droughtTolerance: 'Maduración y ahumado lento',
    image: '/assets/Quesos Zampa/IMG_9824.JPG',
    imageAlt: 'Queso Ahumado artesanal Zampa'
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
        {/* Header */}
        <div className={`cultivar-header transition-reveal ${visible ? 'reveal-active' : ''}`}>
          <p className="cultivar-pretitle">Nuestra Selección de Autor</p>
          <h2 className="cultivar-section-title">
            Variedades Artesanales<br />
            <em className="cultivar-section-title-italic">Elaboradas con Leche 100% de Oveja</em>
          </h2>
        </div>

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
