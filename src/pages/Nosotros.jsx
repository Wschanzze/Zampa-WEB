import React from 'react';
import NutritionalBenefits from '../components/NutritionalBenefits';

const Nosotros = () => {
  return (
    <>
      <section className="our-story" style={{ padding: '6rem 5%', minHeight: '80vh' }}>
        <div className="story-container">
          <div className="story-image">
            <img 
              src="/assets/Quesos Zampa/IMG_9879.JPG" 
              alt="Juan Cruz e Isabel - Zampa" 
            />
          </div>
          <div className="story-text">
            <p className="story-subtitle">TANDIL, ARGENTINA</p>
            <h3 className="story-title">NUESTRA HISTORIA Y VISIÓN</h3>
            <p>Juan Cruz Moy Peña (37) e Isabel Sáenz Rozas (31), pareja desde hace más de diez años, decidieron iniciar un proyecto productivo conjunto. Con experiencia profesional en gastronomía (Juan Cruz) y paisajismo (Isabel), la chispa se encendió tras asistir a una charla sobre tambos ovinos en el Parque Industrial, junto a Gonzalo (35), productor agropecuario y hermano de Isabel.</p>
            <p>Así nació Zampa, hace aproximadamente tres años, como un emprendimiento familiar basado en la producción de quesos de oveja. El nombre hace referencia a un arbusto característico de regiones áridas del sur, vinculado culturalmente a la calidad del ganado ovino alimentado en esas condiciones.</p>
            <p>Operamos bajo un sistema de integración vertical, abarcando todas las etapas: cría pastoril de nuestras ovejas frisonas lecheras, producción de leche con dos ordeñes diarios y la elaboración de quesos excepcionales en nuestra propia quesería.</p>
            <p>Nuestro principal objetivo es avanzar con la habilitación definitiva de nuestra quesería propia y desarrollar un punto de venta en Tandil, apostando al valor agregado en origen.</p>
          </div>
        </div>
      </section>

      <NutritionalBenefits />
    </>
  );
};

export default Nosotros;
