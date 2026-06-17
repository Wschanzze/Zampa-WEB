import React from 'react';

const Comunidad = () => {
  return (
    <section className="our-story" style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <div className="section-header">
        <p className="section-subtitle">COMPROMISO Y VALOR</p>
        <h3 className="section-title" style={{ marginBottom: '1rem' }}>ZAMPA Y LA COMUNIDAD</h3>
      </div>
      
      <div className="story-container" style={{ marginTop: '2rem' }}>
        <div className="story-image">
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/-Zb6oeexldo" 
            title="Zampa YouTube Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ borderRadius: '8px', boxShadow: '-15px 15px 0 var(--clr-accent)' }}
          ></iframe>
        </div>
        <div className="story-text">
          <p>En Zampa, creemos que nuestro crecimiento debe ir de la mano con el desarrollo de la comunidad local en Tandil y Napaleofú.</p>
          <p>Nuestra apuesta por el valor agregado en origen no solo significa producir quesos de calidad mundial, sino también fomentar el trabajo, el arraigo y el respeto por nuestro entorno.</p>
          <p>A través de diferentes iniciativas, apoyamos a productores vecinos y colaboramos en espacios educativos para transmitir el valor del trabajo pastoril y la producción artesanal sustentable. Te invitamos a conocer más sobre nuestro impacto en este video.</p>
        </div>
      </div>
    </section>
  );
};

export default Comunidad;
