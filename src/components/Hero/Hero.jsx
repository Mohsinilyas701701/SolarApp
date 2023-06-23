import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className='hero position-relative'></div>
      <div className='overlay position-absolute top-50 start-50 translate-middle'>
        <div className='content pt-20'>
          <h1>Il tuo accesso al sole</h1>
          <p className='text-white py-3'>
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto. La tua
            fonte d'energia, gratuita e sostenibile
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
