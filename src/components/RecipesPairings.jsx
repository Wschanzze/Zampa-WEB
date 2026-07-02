import React from 'react';
import DecoratedTitle from './DecoratedTitle';

const RecipesPairings = () => {
  const images = [
    '/assets/Quesos Zampa/Recetas/receta_1.png',
    '/assets/Quesos Zampa/Recetas/receta_2.png',
    '/assets/Quesos Zampa/Recetas/receta_3.png',
    '/assets/Quesos Zampa/Recetas/receta_4.png',
    '/assets/Quesos Zampa/Recetas/receta_5.png',
    '/assets/Quesos Zampa/Recetas/receta_6.png',
  ];

  return (
    <section className="recipes-pairings">
      <div className="recipes-header">
        <DecoratedTitle className="editorial-title">Recetas y Maridajes</DecoratedTitle>
      </div>

      <div className="recipes-photo-grid">
        {images.map((img, index) => (
          <div key={index} className="recipe-photo-item">
            <img src={img} alt={`Receta Zampa ${index + 1}`} loading="lazy" />
            <div className="recipe-photo-overlay">
              <span>Ver Receta</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesPairings;
