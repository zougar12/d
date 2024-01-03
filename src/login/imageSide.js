import React from 'react';
import './imageSide.css'; // Assurez-vous de créer ce fichier CSS
import Image from './image/img.png'; // Remplacez avec le chemin de votre image
import logo from './image/well.png'; // Remplacez avec le chemin de votre logo

const ImageSide = () => {
  return (
    <div className="image-side">
      <div className="image-container">
        <img src={Image} alt="Profit & Loss Management" className="background-image" />
        <h1>Well'd P&L Manager helps you<br></br> track your profit</h1>
        <div className="title-and-logo">
          
          <img src={logo} alt="Well'd Logo" className="logo"/>
        </div>
      </div>
    </div>
  );
};

export default ImageSide;
