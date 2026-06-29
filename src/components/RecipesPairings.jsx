import React from 'react';
import { Link } from 'react-router-dom';
import DecoratedTitle from './DecoratedTitle';

const RecipesPairings = () => {
  const recipes = [
    {
      id: 1,
      category: 'Maridaje',
      title: 'Tabla de Pecorino con frutos secos y miel silvestre',
      image: '/assets/Quesos Zampa/producto_1.png', // Fallback, would be a real image
      link: '/recetas/tabla-pecorino'
    },
    {
      id: 2,
      category: 'Recetas',
      title: 'Tostas de Ahumado con higos frescos y rúcula',
      image: '/assets/Quesos Zampa/producto_2.png',
      link: '/recetas/tostas-ahumado'
    },
    {
      id: 3,
      category: 'Maridaje',
      title: 'Maridaje de nuestro Manchego Reserva con vinos tintos',
      image: '/assets/Quesos Zampa/producto_3.png',
      link: '/recetas/maridaje-manchego'
    },
    {
      id: 4,
      category: 'Recetas',
      title: 'Fondue de quesos de oveja Zampa',
      image: '/assets/Quesos Zampa/foto_2.jpg',
      link: '/recetas/fondue-oveja'
    }
  ];

  return (
    <section className="recipes-pairings">
      <div className="recipes-header">
        <DecoratedTitle className="editorial-title">Recetas y Maridajes</DecoratedTitle>
      </div>

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={recipe.link} className="recipe-image-link">
              <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} loading="lazy" />
              </div>
            </Link>
            <div className="recipe-content">
              <span className="recipe-category">{recipe.category}</span>
              <h4 className="recipe-title">{recipe.title}</h4>
              <Link to={recipe.link} className="btn-link-minimal">Ver más &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipesPairings;
