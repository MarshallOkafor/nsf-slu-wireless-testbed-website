import React from 'react';
import './TeamMain.css';

function TeamMain() {
  return (
    <div className="team-main-container">
      <div className="card-container Esposito">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/team_images/Esposito.jpg`} alt="Flavio Esposito"></img>
          </div>
          <p className="name">
            Flavio Esposito
          </p>
          <p className="university">
            Saint Louis University
          </p>
          <p className="role">
            Associate Professor
          </p>
      </div>
      <div className="card-container Restuccia">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/team_images/Restuccia.jpg`} alt="Francesco Restuccia"></img>
          </div>
          <p className="name">
            Francesco Restuccia
          </p>
          <p className="university">
            Northeastern University
          </p>
          <p className="role">
            Assistant Professor
          </p>
      </div>
      <div className="card-container Pinto">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/team_images/Pinto.jpg`} alt="Andrea Pinto"></img>
          </div>
          <p className="name">
            Andrea Pinto
          </p>
          <p className="university">
            Saint Louis University
          </p>
          <p className="role">
            PhD Candidate
          </p>
      </div>
      <div className="card-container Hassan">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/team_images/Hassan.jpg`} alt="Tanzil bin Hassan"></img>
          </div>
          <p className="name">
            Tanzil bin Hassan
          </p>
          <p className="university">
            Northeastern University
          </p>
          <p className="role">
            PhD Candidate
          </p>
      </div>
      <div className="card-container Pappone">
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/team_images/Pappone.jpg`} alt="Lorenzo Pappone"></img>
          </div>
          <p className="name">
            Lorenzo Pappone
          </p>
          <p className="university">
            Saint Louis University
          </p>
          <p className="role">
            PhD Candidate
          </p>
      </div>
    </div>
  );
}

export default TeamMain;
