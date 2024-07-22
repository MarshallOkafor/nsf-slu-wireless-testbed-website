import React from 'react';
import './PublicationsHero.css';

function PublicationsHero() {
  return (
    <div className='publications-hero-container'>
      <img src={`${process.env.PUBLIC_URL}/publications.jpg`} alt="Aerial view of city with 5G symbol linked to icons (plane, phone, wifi, etc.) scattered across the city." />
      <h1>Publications</h1>
    </div>
  );
}

export default PublicationsHero;
