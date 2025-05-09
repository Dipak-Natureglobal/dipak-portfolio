"use client";
import React from 'react';
import Image from 'next/image';
const openWhatsApp = () => {
  // Replace 'your_message' with the message you want to send
  const message = encodeURIComponent('Hi there, I have some work for you!');

  // Replace 'your_phone_number' with the phone number you want to message
  const phoneNumber = '+918910171611';

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

const WhatsAppButton = () => {
  return (
    <button
      onClick={openWhatsApp}
      className="fixed z-[30] bottom-4 right-3 p-2 rounded-full bg-dark-edit font-extrabold dark:text-black text-white bg-black/80 dark:bg-white flex items-center space-x-2"
      style={{ cursor: 'pointer' }}
    >
      <Image
        src="/assets/whatsapp/whatsapp-logo-trans.png" 
        alt="WhatsApp Logo"
        width="32"
        height="32"
      />
      <span className="hidden md:inline-block">Whatsapp</span>
    </button>
  );
};

export default WhatsAppButton;
