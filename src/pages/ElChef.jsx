import React from 'react';

const ElChef = () => {
  return (
    <section className="our-story" style={{ padding: '6rem 5%', minHeight: '80vh' }}>
      <div className="section-header">
        <p className="section-subtitle">LA GASTRONOMÍA DETRÁS DE ZAMPA</p>
        <h3 className="section-title" style={{ marginBottom: '1rem' }}>EL CHEF: JUAN CRUZ</h3>
      </div>
      
      <div className="story-container" style={{ marginTop: '2rem' }}>
        <div className="story-text">
          <p>Juan Cruz, con su gran experiencia profesional en gastronomía, lidera Zampa aportando una visión culinaria única al mundo de los quesos. Su conocimiento sobre ingredientes y técnicas permite elaborar quesos de oveja artesanales que son aclamados por la comunidad gastronómica local.</p>
          <p>Nuestros productos ya se encuentran en las cocinas de varios chefs reconocidos, quienes eligen los quesos de Zampa para elevar el nivel de sus preparaciones, apostando siempre por el producto local y el verdadero sabor de campo.</p>
        </div>
        <div className="story-image">
          <img 
            src="/assets/Quesos Zampa/IMG_0019.JPG" 
            alt="Juan Cruz trabajando" 
            style={{ boxShadow: '15px 15px 0 var(--clr-accent)' }}
          />
        </div>
      </div>

      <div className="story-container" style={{ marginTop: '6rem' }}>
        <div className="story-image">
          <img 
            src="/assets/Quesos Zampa/pecorino.jpeg" 
            alt="Pecorino Zampa" 
          />
        </div>
        <div className="story-text">
          <p className="story-subtitle">NUESTRA ESTRELLA</p>
          <h3 className="story-title">PECORINO, DE ZAMPA</h3>
          <p>Este auténtico heredero de la mejor tradición quesera italiana se elabora con leche de oveja criadas de forma pastoril. Este queso pecorino es suave, de aroma intenso y pasados los 6 meses de maduración ofrece buen picor.</p>
          <p><strong>¿Quién lo produce?</strong> Dice Juan Cruz, quien dirige Zampa: "El primer año nos dedicamos a aprender del tambo, del bienestar animal y a manejar las pasturas, porque la base para poder tener leche de buena calidad y poder lograr nuestros quesos es esa". Hoy ya tenemos nuestra propia sala de elaboración en el predio del tambo. "Tenemos 120 ovejas y la idea es seguir creciendo".</p>
          <p><strong>¿Cómo disfrutarlo?</strong> Solo, en picada, es increíble. Pero el plato estrella del pecorino es la pasta <em>cacio e pepe</em>, una preparación típica de Roma que solo lleva spaghettis, queso pecorino y pimienta. <em>E dopo morire.</em></p>
        </div>
      </div>
    </section>
  );
};

export default ElChef;
