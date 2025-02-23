"use client";


import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-5 py-6 shadow-custom">
      <div className="flex items-center justify-between container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BOARDS PREP - ADTEC All rights reserved.</p>
        
        <button>
            <img src="/infinity.svg" alt="a" />
        </button>
      </div>

    </footer>
  );
};  

export default Footer;
