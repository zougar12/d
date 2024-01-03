import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-inner-container"> {/* Nouvelle div pour aligner les éléments */}
        <h2>Connexion</h2>
        <div className="input-group">
          <input type="email" placeholder="exemple: mohamed.zougar@welld.fr" required />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Entrez votre mot de passe" required />
        </div>
        <button type="submit" className="login-btn">Connexion</button>
      </div>
    </div>
  );
};

export default Login;
