import React from 'react';
import NutritionalBenefits from '../components/NutritionalBenefits';

const Nosotros = () => {
  return (
    <div className="newspaper-wrapper">
      <div className="newspaper-container">
        
        {/* CABECERA DEL PERIÓDICO */}
        <header className="newspaper-header">
          <h1 className="masthead">El Diario de Zampa</h1>
          <p style={{ fontFamily: 'var(--font-brand)', fontSize: '1rem', fontStyle: 'italic', margin: '0.5rem 0 0 0', letterSpacing: '0.05em' }}>
            Crónicas de la Cría Pastoril y la Quesería Artesanal
          </p>
          <div className="newspaper-meta">
            <span>Napaleofú, Tandil • Argentina</span>
            <span>Año III • Edición Especial</span>
            <span>Valor: Trabajo y Dedicación</span>
          </div>
        </header>

        {/* CONTENIDO DEL PERIÓDICO (SPREAD / DOS PÁGINAS) */}
        <div className="newspaper-spread">

          {/* PÁGINA IZQUIERDA (ARTÍCULO PRINCIPAL Y FOTO HISTÓRICA) */}
          <section className="newspaper-page-left">
            <span className="article-tag">Historia de Familia</span>
            <h2 className="article-title">El Origen de un Sueño de Oveja en Tandil</h2>
            <p className="article-subtitle">
              Cómo Juan Cruz e Isabel unieron la gastronomía y el paisajismo en un tambo ovino referente en Napaleofú.
            </p>
            
            <div className="newspaper-img-container" style={{ position: 'relative' }}>
              <img 
                src="/assets/Quesos Zampa/IMG_9879.JPG" 
                alt="Juan Cruz e Isabel - Zampa" 
              />
              <p className="newspaper-img-caption">
                Juan Cruz Moy Peña (37) e Isabel Sáenz Rozas (31) en el predio donde comenzó su historia productiva.
              </p>
              <h1 className="watermark-logo" style={{ bottom: '10%', right: '5%', opacity: '0.15' }}>ZAMPA<br />QUESOS<br />TANDIL</h1>
            </div>

            <div className="article-text">
              <div className="article-columns">
                <p className="drop-cap">
                  Juan Cruz Moy Peña e Isabel Sáenz Rozas, pareja desde hace más de diez años, decidieron iniciar un proyecto productivo conjunto tras un largo período de búsqueda sin una idea definida. Con experiencia profesional en gastronomía (Juan Cruz) y paisajismo (Isabel), la chispa definitiva se encendió al asistir, junto a Gonzalo (35), hermano de Isabel y productor agropecuario, a una charla sobre tambos ovinos en el Parque Industrial de Tandil.
                </p>
                <p>
                  Motivados por el enorme potencial de la actividad, tomaron una decisión temprana y muy audaz: adquirieron 40 borregas frisonas lecheras sin contar aún con una estructura física consolidada. Fue un salto de fe que requirió determinación inmediata para acondicionar un campo arrendado en Napaleofú y convertirlo en su centro operativo.
                </p>
                <p>
                  Hoy en día, Zampa opera bajo un sistema de integración vertical. Esto significa que la familia controla meticulosamente cada eslabón de la cadena de valor: la cría de su rebaño frisón en pasturas naturales, la obtención de leche fresca y la elaboración de quesos de oveja de carácter excepcional en su propia quesería.
                </p>
              </div>
            </div>

            <blockquote className="article-quote">
              "Adquirimos nuestras primeras 40 borregas sin tener una estructura armada. Fue un salto de fe que hoy da vida a quesos artesanales con identidad y terruño propio."
            </blockquote>

            <div className="sub-article" style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span className="article-tag">El Tambo Ovino</span>
              <h3 className="article-title" style={{ fontSize: '1.6rem' }}>El Ordeñe Diario y el Cuidado del Rebaño</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#3C3B39', marginBottom: '1.5rem' }}>
                La jornada en Napaleofú comienza muy temprano con los dos ordeñes diarios. La leche fresca es transportada inmediatamente a la quesería para preservar sus cualidades intactas. El pastoreo directo sobre pasturas de alta calidad garantiza que nuestras ovejas gocen de una alimentación natural, libre de químicos, reflejándose en una materia prima superior.
              </p>
              <div className="newspaper-img-container">
                <img 
                  src="/assets/Quesos Zampa/IMG_9824.JPG" 
                  alt="Pastoreo de ovejas Zampa" 
                />
                <p className="newspaper-img-caption">
                  Ovejas frisonas lecheras en pleno pastoreo diario en las sierras.
                </p>
              </div>
            </div>
          </section>

          {/* PÁGINA DERECHA (ARTÍCULOS SECUNDARIOS Y CIFRAS EN SIDEBAR) */}
          <section className="newspaper-page-right">
            
            {/* COLUMNA DE ARTÍCULOS DE LA DERECHA */}
            <div className="right-page-articles">
              
              <div className="sub-article">
                <span className="article-tag">Elaboración Artesanal</span>
                <h3 className="article-title" style={{ fontSize: '1.7rem' }}>Quesos de Autor y Habilitación Local</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#3C3B39', marginBottom: '1.5rem' }}>
                  En Zampa nos enfocamos en producciones limitadas donde cada horma se cuida individualmente. Elaboramos variedades selectas como Pecorino, Ahumado, Orégano y Manchego. El gran objetivo del proyecto es avanzar con la habilitación definitiva de la quesería propia para vender directo al público y potenciar el valor agregado en origen.
                </p>
                <div className="newspaper-img-container">
                  <img 
                    src="/assets/Quesos Zampa/IMG_9821.JPG" 
                    alt="Quesos Zampa madurando" 
                  />
                  <p className="newspaper-img-caption">
                    Quesos de oveja en su proceso controlado de maduración sobre estanterías de madera.
                  </p>
                </div>
              </div>

              <div className="sub-article" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <span className="article-tag">Identidad</span>
                <h3 className="article-title" style={{ fontSize: '1.7rem' }}>Zampa: La Resiliencia de la Estepa</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#3C3B39', marginBottom: '1.5rem' }}>
                  El nombre del emprendimiento hace honor al arbusto 'Zampa', característico de las regiones más áridas del sur argentino. En la estepa, este arbusto está muy asociado a la calidad del ganado ovino de pastoreo por su alto valor nutritivo y resistencia. Adoptar su nombre simboliza la rusticidad, resiliencia y el carácter natural que impregna a nuestros quesos.
                </p>
                <div className="newspaper-img-container">
                  <img 
                    src="/assets/Quesos Zampa/IMG_9823.JPG" 
                    alt="Quesos Zampa terminados" 
                  />
                  <p className="newspaper-img-caption">
                    Hormas listas para ser marcadas con el logo original de la quesería.
                  </p>
                </div>
              </div>

            </div>

            {/* COLUMNA DE CIFRAS EXTREMA DERECHA (NEWSPAPER SIDEBAR) */}
            <aside className="cifras-sidebar">
              <h4 className="cifras-title">Zampa en Cifras</h4>
              
              <div className="cifra-item">
                <span className="cifra-number">40</span>
                <span className="cifra-label">Borregas Iniciales</span>
              </div>

              <div className="cifra-item">
                <span className="cifra-number">2</span>
                <span className="cifra-label">Ordeñes Diarios</span>
              </div>

              <div className="cifra-item">
                <span className="cifra-number">100%</span>
                <span className="cifra-label">Pastoral Natural</span>
              </div>

              <div className="cifra-item">
                <span className="cifra-number">6+</span>
                <span className="cifra-label">Meses Maduración</span>
              </div>

              <div className="cifra-item">
                <span className="cifra-number">A2</span>
                <span className="cifra-label">Caseína Digestiva</span>
              </div>

              <div className="cifra-item">
                <span className="cifra-number">3</span>
                <span className="cifra-label">Fundadores Familiares</span>
              </div>
            </aside>

          </section>

        </div>

        {/* SECCIÓN ANUNCIO VINTAGE A PIE DE PÁGINA (BENEFICIOS NUTRICIONALES) */}
        <footer className="newspaper-ad-container">
          <div className="newspaper-ad-box">
            <NutritionalBenefits isVintage={true} />
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Nosotros;
