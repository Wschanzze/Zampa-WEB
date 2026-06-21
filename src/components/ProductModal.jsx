import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ProductModal = () => {
  const { activeProduct, closeProductModal } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeProductModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeProductModal]);

  if (!activeProduct) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeProductModal();
    }
  };

  return (
    <div className="modal-overlay open" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={closeProductModal}>&times;</button>
        <div className="modal-gallery">
          <img src={`/${activeProduct.image}`} alt={activeProduct.name} />
        </div>
        <div className="modal-details">
          <span className="modal-category">{activeProduct.category.replace('-', ' ')}</span>
          <h3 className="modal-name">{activeProduct.name}</h3>
          <span className="modal-price">${activeProduct.price.toFixed(2)}</span>
          <p className="modal-description">{activeProduct.description}</p>
          {activeProduct.details && (
            <ul className="modal-specs">
              {activeProduct.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          )}
          <button 
            className="btn btn-secondary btn-add-modal"
            onClick={() => {
              closeProductModal();
              navigate('/contacto');
            }}
          >
            CONSULTAR PRODUCTO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
