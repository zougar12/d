import React from 'react';
import ImageSide from './imageSide';
import Login from './login';
import './main.css'; // Créez ce fichier pour le style de la page entière

const MainPage = () => {
  return (
    <div className="main-page">
      <ImageSide />
      <Login />
    </div>
  );
};

export default MainPage;
