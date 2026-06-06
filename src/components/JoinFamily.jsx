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
        src="/assets/images/sunset_cowboy_1780357514909.png" 
        alt="Cowboy at sunset" 
        className="join-bg" 
      />
      <div className="join-content">
        <p className="join-subtitle">BE THE FIRST TO KNOW</p>
        <h2 className="join-title">JOIN THE FAMILY</h2>
        
        {!submitted ? (
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn btn-submit">SUBMIT</button>
          </form>
        ) : (
          <p className="success-message">THANK YOU! WELCOME TO THE LUCKY U STRIKES FAMILY.</p>
        )}
        
        <h1 className="watermark-logo">LUCKY<br />SUPPLIES<br />STRIKES</h1>
      </div>
    </section>
  );
};

export default JoinFamily;
