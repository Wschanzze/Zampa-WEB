import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DecoratedTitle from './DecoratedTitle';

const entries = [
  {
    year: '2018',
    era: 'El Origen',
    title: 'El Comienzo del Tambo',
    description: 'Adquisición de las primeras ovejas frisonas y puesta en marcha del tambo en Napaleofú.',
    detail: 'Tras asistir a una charla sobre tambos ovinos en Tandil, Juan Cruz, Isabel y Gonzalo decidieron emprender en el campo. Comenzaron con la compra de 40 borregas frisonas de aptitud lechera, iniciando así un camino de aprendizaje constante y manejo de pasturas bajo el nombre de Ovinos Zampa.',
    yieldNote: 'Rodeo inicial: 40 borregas ovinas frisonas seleccionadas.',
    regionNote: 'Establecimiento en Napaleofú, Buenos Aires (Ruta 226).',
    thumb: '/assets/Quesos Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg',
    thumbAlt: 'Fotografía del rebaño y pasturas de la quesería',
    filter: 'grayscale(10%) contrast(1.05)'
  },
  {
    year: '2020',
    era: 'Quesería',
    title: 'La Transformación en Quesos',
    description: 'Decisión estratégica de integrar la cadena y elaborar quesos artesanales propios.',
    detail: 'Para capturar mayor value agregado, Zampa dejó de vender leche cruda a terceros y comenzó a procesarla en quesos de autor. Juan Cruz, con su formación gastronómica, desarrolló recetas inspiradas en las tradiciones francesa, italiana y española, elaborando quesos con leche fresca del mismo día.',
    yieldNote: 'Integración: Elaboración diaria de lunes a lunes con leche fresca.',
    regionNote: 'Desarrollo de las primeras recetas de Camembert y Pecorino.',
    thumb: '/assets/Quesos Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg',
    thumbAlt: 'Quesos madurando en estanterías tradicionales'
  },
  {
    year: '2023',
    era: 'Crecimiento',
    title: 'Reconocimiento y Expansión',
    description: 'Los quesos Zampa llegan a los locales gourmet más exigentes de Tandil y la zona.',
    detail: 'La excelente calidad láctica de la leche de oveja frisona consolidó a Zampa en el mercado regional. Dietéticas, fiambrerías gourmet y vinerías seleccionadas en Tandil comenzaron a ofrecer nuestras variedades, construyendo una reputación de sabor único y cuidado artesanal.',
    yieldNote: 'Canal Gourmet: Distribución consolidada en locales seleccionados.',
    regionNote: 'Presencia regional fuerte en Tandil, Napaleofú y la zona.',
    thumb: '/assets/Quesos Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg',
    thumbAlt: 'Presentación de quesos en almacén regional'
  },
  {
    year: '2026',
    era: 'Presente',
    title: 'Cadena Completa y Nuevos Desafíos',
    description: 'Quesería habilitada en el propio campo y enfoque en maduraciones prolongadas.',
    detail: 'Con una majada de 100 ovejas y la quesería a solo 100 metros del tambo, controlamos cada paso del proceso sin intermediarios. Nuestros próximos grandes hitos son abrir un local exclusivo de la marca en Tandil y consolidar nuestro Pecorino de larga maduración (9 a 12 meses en cava).',
    yieldNote: 'Producción actual: ~100 kg de queso artesanal por semana.',
    regionNote: 'Proyecto futuro: Local propio exclusivo de Quesos Zampa en Tandil.',
    thumb: '/assets/Quesos Zampa/IMG_9824.JPG',
    thumbAlt: 'Queso madurado de oveja Zampa en cava'
  }
];

export default function TimelineGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (i) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="timeline" ref={sectionRef} className="timeline-section">
      <div className="wheat-rule-gradient mb-16" />

      <div className="timeline-container">
        {/* Header */}
        <div className={`timeline-header transition-reveal ${visible ? 'reveal-active' : ''}`}>
          <p className="timeline-pretitle">Nuestra Trayectoria</p>
          <DecoratedTitle className="timeline-title" tag="h2">
            Un Tambo Ovino Familiar, Pasión de Origen en Cada Queso.
          </DecoratedTitle>
          <p className="timeline-intro-text">
            Cada hito representa el esfuerzo de nuestro equipo para perfeccionar el queso de oveja artesanal. Haz clic en cualquier época para conocer más.
          </p>
        </div>


        {/* Timeline entries */}
        <div className="timeline-list">
          {entries.map((entry, i) => (
            <div 
              key={entry.year} 
              className={`timeline-item ${activeIndex === i ? 'active' : ''}`}
            >
              {/* Row trigger */}
              <button
                onClick={() => toggle(i)}
                className="timeline-trigger"
                aria-expanded={activeIndex === i}
              >
                {/* Year + dot */}
                <div className="timeline-year-group">
                  <div className="timeline-dot" />
                  <span className="timeline-year">{entry.year}</span>
                </div>

                {/* Era badge */}
                <span className="timeline-badge-era">
                  {entry.era}
                </span>

                {/* Title & short desc */}
                <div className="timeline-meta-group">
                  <h3 className="timeline-item-title">
                    {entry.title}
                  </h3>
                  <p className="timeline-item-description">
                    {entry.description}
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="timeline-thumb-wrapper">
                  <img
                    src={entry.thumb}
                    alt={entry.thumbAlt}
                    className="timeline-thumb-img"
                    style={entry.filter ? { filter: entry.filter } : undefined}
                  />
                </div>

                {/* Chevron */}
                <div className={`timeline-chevron-wrapper ${activeIndex === i ? 'rotated' : ''}`}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="timeline-chevron-svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>

              {/* Expandable panel */}
              <div className={`timeline-panel ${activeIndex === i ? 'open' : ''}`}>
                <div className="timeline-panel-content">
                  {/* Full image */}
                  <div className="timeline-panel-image-container">
                    <img
                      src={entry.thumb}
                      alt={entry.thumbAlt}
                      className="timeline-panel-img"
                      style={entry.filter ? { filter: entry.filter } : undefined}
                    />
                  </div>

                  {/* Narrative */}
                  <div className="timeline-panel-narrative">
                    <p className="timeline-panel-detail">{entry.detail}</p>
                    {i === 0 && (
                      <Link to="/productos" className="timeline-link">
                        Ver Productos Disponibles →
                      </Link>
                    )}
                  </div>

                  {/* Data cards */}
                  <div className="timeline-panel-data">
                    <div className="timeline-data-card">
                      <span className="timeline-data-card-title">Datos de Lote</span>
                      <p className="timeline-data-card-text">{entry.yieldNote}</p>
                    </div>
                    <div className="timeline-data-card">
                      <span className="timeline-data-card-title">Alcance de Distribución</span>
                      <p className="timeline-data-card-text">{entry.regionNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wheat-rule-gradient mt-16" />
    </section>
  );
}
