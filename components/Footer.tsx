// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">Hit me up:</h2>
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Unmentioned skills:</h2>
          <ul>
            <li>Setting food on fire: Intermediate</li>
            <li>Spelling focaccia wrong: Expert</li>
            <li>Eating a full pack of hobnobs: Expert</li>
            <li>Dad dancing: Improving every day</li>
          </ul>
        </div>
        <div>
          <p>Built with <span className="text-red-500">♥</span> insanity during quarantine</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
