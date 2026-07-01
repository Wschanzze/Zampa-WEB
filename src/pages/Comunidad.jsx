import React from 'react';
import TimelineGallery from '../components/TimelineGallery';

const Comunidad = () => {
  return (
    <div className="comunidad-wrapper">
      
      {/* SECCIÓN HERO CON VIDEO DE FONDO */}
      <section className="comunidad-hero">
        <video 
          src="/assets/Quesos Zampa/sheeps.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="comunidad-hero-overlay"></div>
        <div className="comunidad-hero-content">
          <p>Zampa y la Comunidad</p>
          <h1>Compromiso con Nuestra Tierra</h1>
        </div>
      </section>

      {/* SECCIÓN INTRODUCCIÓN / FILOSOFÍA */}
      <section className="comunidad-intro-section">
        <div className="comunidad-intro-title">
          <span>VALOR EN ORIGEN</span>
          <h2>Arraigo y Crecimiento Cooperativo en Tandil</h2>
        </div>
        <div className="comunidad-intro-desc">
          <p>
            En Zampa, creemos firmemente que nuestro desarrollo no debe ocurrir de forma aislada, 
            sino de la mano con la comunidad que nos cobija. Nuestra base operativa en Napaleofú 
            y Tandil es el corazón de todo lo que hacemos.
          </p>
          <p>
            Producir un queso artesanal premium no es solo una búsqueda de excelencia gastronómica, 
            sino una apuesta por revalorizar la vida rural, generar arraigo para las familias del campo 
            y promover un ecosistema de trabajo respetuoso y justo.
          </p>
        </div>
      </section>

      {/* SECCIÓN GALERÍA MINIMALISTA */}
      <section className="comunidad-gallery">
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/assets/Quesos Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg" alt="Paisaje de pasturas de Zampa" />
            <span className="gallery-caption">Pastizales de Napaleofú</span>
          </div>
          <div className="gallery-item">
            <img src="/assets/Quesos Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg" alt="Tambo y ovejas en Zampa" />
            <span className="gallery-caption">Tradición y Cuidado</span>
          </div>
          <div className="gallery-item">
            <img src="/assets/Quesos Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg" alt="Detalle de horma de queso de oveja" />
            <span className="gallery-caption">Materia Prima Noble</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN COMPROMISOS / PILARES */}
      <section className="initiatives-section">
        <div className="initiatives-header">
          <h2>Nuestros Pilares de Impacto</h2>
          <p style={{ color: 'var(--clr-text-light)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Trabajamos día a día bajo lineamientos claros de responsabilidad social y ambiental, 
            articulando acciones en beneficio de la comunidad regional.
          </p>
        </div>
        
        <div className="initiatives-grid">
          <div className="initiative-card">
            <span className="initiative-number">01</span>
            <h3>Arraigo y Empleo Local</h3>
            <p>
              Generamos oportunidades de empleo formal y capacitaciones técnicas en el sector rural. 
              Promovemos que las familias jóvenes se establezcan y proyecten su vida en el campo, 
              fortaleciendo la economía local de Napaleofú.
            </p>
          </div>
          
          <div className="initiative-card">
            <span className="initiative-number">02</span>
            <h3>Pastoreo Regenerativo</h3>
            <p>
              Fomentamos prácticas de pastoreo ovino rotativo y regeneración de suelos. 
              Colaboramos estrechamente con ingenieros y productores vecinos compartiendo aprendizajes 
              para promover una ganadería más sustentable.
            </p>
          </div>
          
          <div className="initiative-card">
            <span className="initiative-number">03</span>
            <h3>Educación y Puertas Abiertas</h3>
            <p>
              Mantenemos un vínculo constante con escuelas agro técnicas y espacios educativos de la zona, 
              abriendo nuestras instalaciones para dar a conocer el valor de los tambos ovinos y el 
              proceso de la quesería tradicional.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DOCUMENTAL / VIDEO DE YOUTUBE */}
      <section className="documentary-section">
        <div className="documentary-header">
          <h2>Conoce Más de Zampa</h2>
          <p style={{ color: 'var(--clr-text-light)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
            Te invitamos a ver el siguiente documental sobre nuestros orígenes, nuestro tambo pastoril 
            y el testimonio directo de Juan Cruz e Isabel en su día a día.
          </p>
        </div>
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/-Zb6oeexldo" 
            title="Documental Zampa - Tambo Ovino y Quesería en Tandil" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* GALERÍA CRONOLÓGICA DE TRAYECTORIA */}
      <TimelineGallery />

    </div>
  );
};

export default Comunidad;

