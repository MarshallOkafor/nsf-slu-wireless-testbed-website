import React from 'react';
import './TeamHero.css';

function TeamHero() {
  return (
    <div className='team-hero-container'>
      <img src={`${process.env.PUBLIC_URL}/team.jpg`} alt="Spacious modern conference room with a central table/chairs, sunlight beaming through large windows, and industrial lighting." />
      <h1>Team</h1>
    </div>
  );
}

export default TeamHero;
