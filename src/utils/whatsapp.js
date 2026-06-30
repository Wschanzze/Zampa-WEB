export const WHATSAPP_NUMBER = "5491132554757";

export const generateWhatsAppLink = (phoneNumber, message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const createCartMessage = (cartItems) => {
  let message = "Hola, vengo desde la página web y estoy interesado en los siguientes productos:\n\n";
  cartItems.forEach(({ product, quantity }) => {
    message += `- ${product.name} (x${quantity})\n`;
  });
  return message;
};

export const createResellerMessage = (formData) => {
  const businessTypeMap = {
    distributor: "Distribuidor",
    restaurant: "Restaurante / Hotel",
    cheese_shop: "Fiambrería / Tienda Gourmet",
    supermarket: "Supermercado / Cadena"
  };
  
  return `Hola, me interesa ser revendedor. A continuación dejo mis datos:

*Razón Social:* ${formData.businessName}
*Identificación Tributaria:* ${formData.taxId}
*Tipo de Negocio:* ${businessTypeMap[formData.businessType] || formData.businessType}
*Nombre de Contacto:* ${formData.contactName}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Ubicación:* ${formData.location}
${formData.message ? `*Mensaje:* ${formData.message}` : ''}`;
};
