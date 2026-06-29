import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import DecoratedTitle from '../components/DecoratedTitle';

const Contacto = () => {
  const { addToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    addToast('¡Mensaje enviado con éxito! Nos comunicaremos a la brevedad.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contacto-page" style={{ padding: '6rem 5% 4rem', backgroundColor: 'var(--clr-bg)' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="section-subtitle">COMUNICATE CON NOSOTROS</p>
        <DecoratedTitle className="section-title">Contacto</DecoratedTitle>
        <p className="section-description" style={{ maxWidth: '700px', margin: '1rem auto 0', color: 'var(--clr-text-light)' }}>
          ¿Querés saber más sobre nuestros quesos, coordinar una compra especial o visitarnos en Napaleofú? Dejanos tu mensaje.
        </p>
      </div>

      <div className="b2b-layout" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Info Column */}
        <div className="b2b-specs-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 className="vintage-header">ATENCIÓN DIRECTA</h3>
            <p style={{ margin: '1rem 0' }}>
              Estamos en Napaleofú, en el partido de Balcarce, cerca de Tandil, Provincia de Buenos Aires, Argentina.
            </p>
          </div>

          <div className="spec-row" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span className="spec-label">WhatsApp</span>
            <a href="https://wa.me/5492494000000" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: 'var(--clr-accent)', fontWeight: '600' }}>
              +54 9 249 400-0000
            </a>
          </div>

          <div className="spec-row" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span className="spec-label">Correo Electrónico</span>
            <a href="mailto:hola@quesoszampa.com" style={{ fontSize: '1.1rem', color: 'var(--clr-text-main)' }}>
              hola@quesoszampa.com
            </a>
          </div>

          <div className="spec-row" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span className="spec-label">Ubicación del Tambo</span>
            <span style={{ fontSize: '1.1rem', color: 'var(--clr-text-main)', fontFamily: 'var(--font-brand)' }}>
              Napaleofú, Tandil • Buenos Aires, Argentina
            </span>
          </div>

          <div className="b2b-notes" style={{ marginTop: '1rem', padding: '1.5rem', backgroundColor: '#fcfaf6', borderRadius: '8px', borderLeft: '4px solid var(--clr-accent)' }}>
            <h5>🌿 Sistema Pastoril de Alta Calidad</h5>
            <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0', lineHeight: '1.6' }}>
              Nuestras ovejas se crían en pasturas libres, lo que otorga a la leche y a los quesos características sensoriales únicas que varían con las estaciones del año.
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="b2b-form-container">
          <h3 className="vintage-header">ENVIANOS UN MENSAJE</h3>
          <form className="vintage-ad-form b2b-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
