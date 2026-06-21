import React, { useState, useEffect, useRef } from 'react';

const chefSections = [
  {
    id: 1,
    title: "JUAN CRUZ: EL CHEF",
    subtitle: "LA GASTRONOMÍA DETRÁS DE ZAMPA",
    text: [
      "Juan Cruz, con su gran experiencia profesional en gastronomía, lidera Zampa aportando una visión culinaria única al mundo de los quesos. Su conocimiento sobre ingredientes y técnicas permite elaborar quesos de oveja artesanales que son aclamados por la comunidad gastronómica local.",
      "Nuestros productos ya se encuentran en las cocinas de varios chefs reconocidos, quienes eligen los quesos de Zampa para elevar el nivel de sus preparaciones, apostando siempre por el producto local y el verdadero sabor de campo."
    ],
    image: "/assets/Quesos Zampa/IMG_0019.JPG",
    alt: "Juan Cruz trabajando"
  },
  {
    id: 2,
    title: "PECORINO, DE ZAMPA",
    subtitle: "NUESTRA ESTRELLA",
    text: [
      "Este auténtico heredero de la mejor tradición quesera italiana se elabora con leche de oveja criadas de forma pastoril. Este queso pecorino es suave, de aroma intenso y pasados los 6 meses de maduración ofrece buen picor.",
      "Dice Juan Cruz, quien dirige Zampa: \"El primer año nos dedicamos a aprender del tambo, del bienestar animal y a manejar las pasturas, porque la base para poder tener leche de buena calidad y poder lograr nuestros quesos es esa\"."
    ],
    image: "/assets/Quesos Zampa/pecorino.jpeg",
    alt: "Pecorino Zampa"
  },
  {
    id: 3,
    title: "SALA DE ELABORACIÓN",
    subtitle: "CRECIENDO DESDE LA RAÍZ",
    text: [
      "Hoy ya tenemos nuestra propia sala de elaboración en el predio del tambo. \"Tenemos 120 ovejas y la idea es seguir creciendo\", afirma Juan.",
      "Todo el proceso, desde el ordeñe hasta la maduración en cámara, es supervisado meticulosamente para garantizar que cada horma de queso alcance la calidad premium que nos caracteriza."
    ],
    image: "/assets/Quesos Zampa/IMG_9816.JPG",
    alt: "Sala de elaboración"
  },
  {
    id: 4,
    title: "CACIO E PEPE",
    subtitle: "¿CÓMO DISFRUTARLO?",
    text: [
      "Solo, en picada, nuestro pecorino es increíble. Pero el plato estrella para lucirlo es la pasta cacio e pepe, una preparación típica de Roma que solo lleva spaghettis, queso pecorino y pimienta.",
      "E dopo morire. Una experiencia gastronómica inigualable que te transporta a Italia, pero con el inconfundible espíritu del campo uruguayo."
    ],
    image: "/assets/Quesos Zampa/07B73847-614E-4FDC-B7AF-F639064C64CB.jpg",
    alt: "Plato con queso Zampa"
  }
];

const Elaboracion = () => {
  const [activeImage, setActiveImage] = useState(chefSections[0].image);
  const textRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-id');
          const section = chefSections.find(s => s.id === parseInt(sectionId));
          if (section) {
            setActiveImage(section.image);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    textRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="our-story chef-scroll-section" style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
      
      <div className="section-header chef-main-header">
        <p className="section-subtitle">LA GASTRONOMÍA DETRÁS DE ZAMPA</p>
        <h3 className="section-title" style={{ marginBottom: '1rem' }}>EL CHEF: JUAN CRUZ</h3>
      </div>

      <div className="chef-scroll-wrapper">
        <div className="chef-text-col">
          {chefSections.map((section, index) => (
            <div 
              key={section.id} 
              className="chef-text-block" 
              data-id={section.id}
              ref={el => textRefs.current[index] = el}
            >
              <div className="story-text">
                <p className="story-subtitle">{section.subtitle}</p>
                <h3 className="story-title" style={{ marginBottom: '1.5rem' }}>{section.title}</h3>
                {section.text.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              
              <div className="chef-mobile-image">
                <img src={section.image} alt={section.alt} />
              </div>
            </div>
          ))}
        </div>

        <div className="chef-image-col">
          <div className="chef-sticky-container">
            {chefSections.map((section) => (
              <img 
                key={section.id}
                src={section.image} 
                alt={section.alt} 
                className={`chef-sticky-image ${activeImage === section.image ? 'active' : ''}`}
              />
            ))}
            <h1 className="watermark-logo" style={{ bottom: '-5%', right: '-5%', opacity: '0.1' }}>ZAMPA<br />QUESOS<br />TANDIL</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elaboracion;
