import React from 'react';
import './PublicationsHero.css';

function PublicationsHero() {
  return (
    <div className='publications-hero-container'>
      <img src={`${process.env.PUBLIC_URL}/publications.jpg`} alt="Server Room" />
      <h1>Publications</h1>
    </div>
  );
}

export default PublicationsHero;
