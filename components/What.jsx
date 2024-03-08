import React from 'react';
import whatsappLogo from './whatsapp-logo.png'; // WhatsApp logosunun dosya yolu

const WhatsAppWidget = () => {
  // WhatsApp numarası
  const phoneNumber = '90555*******';
  // Mesaj içeriği
  const message = 'Merhaba, size ulaşmak istiyorum.';
  // WhatsApp'a yönlendirme URL'i
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>
      <h1>WhatsApp Uygulaması</h1>
      <p>Mesaj göndermek için aşağıdaki butona tıklayın:</p>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img src={whatsappLogo} alt="WhatsApp Logo" />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
