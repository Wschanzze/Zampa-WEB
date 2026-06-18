import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const B2B = () => {
  const { addToast } = useApp();
  const [formData, setFormData] = useState({
    businessName: '',
    taxId: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'distributor',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    console.log('B2B Form Submitted:', formData);
    addToast('¡Solicitud enviada con éxito! Nos comunicaremos a la brevedad.');
    setFormData({
      businessName: '',
      taxId: '',
      contactName: '',
      email: '',
      phone: '',
      businessType: 'distributor',
      location: '',
      message: ''
    });
  };

  return (
    <section className="b2b-page" style={{ padding: '6rem 5% 4rem' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p className="section-subtitle">ALIANZAS COMERCIALES</p>
        <h2 className="section-title">ZAMPA B2B & MAYORISTAS</h2>
        <p className="section-description" style={{ maxWidth: '700px', margin: '1rem auto 0', color: 'var(--clr-text-light)' }}>
          Llevá el sabor único de nuestros quesos de oveja pastoriles a tu restaurante, fiambrería o red de distribución. Simplificamos tu logística y te ofrecemos condiciones comerciales estratégicas.
        </p>
      </div>

      {/* Strategic Information Cards */}
      <div className="b2b-info-grid" style={{ marginBottom: '5rem' }}>
        <div className="b2b-card">
          <div className="b2b-card-icon">📦</div>
          <h4>PEDIDO MÍNIMO</h4>
          <p>Manejamos volúmenes flexibles adaptados tanto a pequeñas tiendas gourmet y restaurantes de autor como a grandes distribuidores regionales.</p>
          <span className="b2b-spec">Mínimo: 10 kg de hormas mixtas</span>
        </div>

        <div className="b2b-card">
          <div className="b2b-card-icon">🚛</div>
          <h4>LOGÍSTICA Y COBERTURA</h4>
          <p>Despachamos directamente desde nuestro tambo con cadena de frío garantizada. Coordinamos entregas semanales programadas.</p>
          <span className="b2b-spec">Envíos a todo el país</span>
        </div>

        <div className="b2b-card">
          <div className="b2b-card-icon">⏳</div>
          <h4>CONSERVACIÓN Y VIDA ÚTIL</h4>
          <p>Nuestros quesos se entregan envasados al vacío, con rotulación clara, garantizando una excelente durabilidad en cámara.</p>
          <span className="b2b-spec">Vida útil: 180 días (envasado)</span>
        </div>

        <div className="b2b-card">
          <div className="b2b-card-icon">🏷️</div>
          <h4>SOPORTE DE VENTAS</h4>
          <p>Te brindamos material POP, fichas técnicas de producto, capacitación para tu personal de ventas y apoyo en degustaciones.</p>
          <span className="b2b-spec">Material digital & folletería gratis</span>
        </div>
      </div>

      {/* Main Content Layout (Table & Form) */}
      <div className="b2b-layout">
        {/* Specifications Section */}
        <div className="b2b-specs-container">
          <h3 className="vintage-header">DATOS ESTRATÉGICOS PARA PROVEEDORES</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Agilizamos tus compras con información técnica detallada de nuestros productos estrella:
          </p>

          <table className="b2b-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Formato de Horma</th>
                <th>Maduración</th>
                <th>Temperatura de Conservación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pecorino Zampa</strong></td>
                <td>Horma entera (~2.5 kg) o Cuñas (~300g)</td>
                <td>6 a 8 meses</td>
                <td>4°C a 8°C</td>
              </tr>
              <tr>
                <td><strong>Ahumado Zampa</strong></td>
                <td>Hormitas individuales (~1 kg)</td>
                <td>3 meses + ahumado natural</td>
                <td>4°C a 10°C</td>
              </tr>
              <tr>
                <td><strong>Queso al Orégano</strong></td>
                <td>Hormitas individuales (~1.2 kg)</td>
                <td>2 meses</td>
                <td>4°C a 8°C</td>
              </tr>
              <tr>
                <td><strong>Manchego Zampa</strong></td>
                <td>Horma grande (~3 kg)</td>
                <td>9 meses</td>
                <td>4°C a 8°C</td>
              </tr>
            </tbody>
          </table>

          <div className="b2b-notes" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fcfaf6', borderRadius: '8px', borderLeft: '4px solid var(--clr-accent)' }}>
            <h5>📌 Canales Integrados y Facturación</h5>
            <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0' }}>
              Ofrecemos facturación formal con RUT/CUIT, fichas de trazabilidad sanitaria aprobadas y facilidades de pago a 30 días para cuentas corrientes corporativas homologadas.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="b2b-form-container">
          <h3 className="vintage-header">SOLICITUD DE ALTA MAYORISTA</h3>
          <form className="vintage-ad-form b2b-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="businessName">Razón Social / Nombre Comercial *</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                placeholder="Ej. Distribuidora Gourmet S.A."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="taxId">Identificación Tributaria (RUT/CUIT) *</label>
                <input
                  type="text"
                  id="taxId"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleChange}
                  required
                  placeholder="Número de registro"
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessType">Tipo de Negocio *</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                >
                  <option value="distributor">Distribuidor</option>
                  <option value="restaurant">Restaurante / Hotel</option>
                  <option value="cheese_shop">Fiambrería / Tienda Gourmet</option>
                  <option value="supermarket">Supermercado / Cadena</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contactName">Nombre de Contacto *</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                placeholder="Nombre del comprador/encargado"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Corporativo *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="compras@tuempresa.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono de Contacto *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Número de teléfono/WhatsApp"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Ubicación / Ciudad y País *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Ej. Montevideo, Uruguay"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Comentarios o Requerimientos Particulares</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Detalla qué volumen estimas comprar, qué quesos te interesan y cualquier otra consulta..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Enviar Solicitud B2B
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default B2B;
