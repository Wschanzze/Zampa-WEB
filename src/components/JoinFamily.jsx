import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const JoinFamily = () => {
  const { addToast } = useApp();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Simulate newsletter subscription
    addToast(`¡Bienvenido a la familia! Te has suscrito con: ${email}`);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="join-family">
      <img 
        src="/assets/Quesos Zampa/6de54990-a007-4692-8898-b1dda1296784.jpg" 
        alt="Quesos en maduración" 
        className="join-bg" 
      />
      <div className="join-content">
        <p className="join-subtitle">SÉ EL PRIMERO EN ENTERARTE</p>
        <h2 className="join-title">NUEVAS HORMAS</h2>
        
        {!submitted ? (
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="TU CORREO ELECTRÓNICO" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn btn-submit">SUSCRIBIRSE</button>
          </form>
        ) : (
          <p className="success-message">¡GRACIAS! TE HAS UNIDO A ZAMPA.</p>
        )}
        
        <h1 className="watermark-logo">ZAMPA<br />QUESOS<br />TANDIL</h1>
      </div>
    </section>
  );
};

export default JoinFamily;
