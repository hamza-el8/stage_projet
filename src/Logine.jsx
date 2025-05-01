import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiUser } from 'react-icons/ci';
import { TbLockPassword } from 'react-icons/tb';

const Login = () => { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotError, setForgotError] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(""); 
  const navigate = useNavigate();

  const correctUsername = "EMP-2025-001";  
  const correctPassword = "employe123";    

  const handleLogin = () => {
    let valid = true;

    // Validate username
    if (!username) {
      setErrorUsername("Veuillez entrer un email.");
      valid = false;
    } else if (username !== correctUsername) {
      setErrorUsername("Nom d'utilisateur incorrect !");
      valid = false;
    } else {
      setErrorUsername("");
    }

    // Validate password
    if (!password) {
      setErrorPassword("Veuillez entrer un mot de passe.");
      valid = false;
    } else if (password !== correctPassword) {
      setErrorPassword("Mot de passe incorrect !");
      valid = false;
    } else {
      setErrorPassword("");
    }

    if (valid) {
      // Save user info in localStorage
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/had"); 
    }
  };

  const handleFocus = (field) => {
    if (field === "username") {
      setErrorUsername("");
    } else if (field === "password") {
      setErrorPassword("");
    }
  };

  const handleForgotPassword = () => {
    if (!forgotEmail) {
      setForgotError("Veuillez entrer votre reference.");
      return;
    }
    if (forgotEmail !== correctUsername) {
      setForgotError("Reference incorrect !");
      return;
    }
    setForgotError("");
    setForgotSuccess("Un lien de réinitialisation a été envoyé à votre email.");

    // Redirect to the "bord" page after a successful reset
    setTimeout(() => {
      navigate("/had"); 
    }, 1500);  // Wait for 1.5 seconds before redirecting
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <img src={require('./image.png')} alt="Logo" className="mb-4" style={{ maxHeight: '150px', objectFit: 'contain' }} />
      <div className="bg-white p-4 rounded shadow-sm" style={{ width: '30%' }}>
        <h3 className="mb-1">Se Connecter</h3>
        <p className="mb-3" style={{ fontSize: '14px' }}>pour continuer vers la plateforme</p>

        <div className="input-group mb-2">
          <div className="input-group-text">
            <CiUser style={{ color: errorUsername ? 'red' : '#aaa' }} />
          </div>
          <input
            type="text"
            className={`form-control ${errorUsername ? 'is-invalid' : ''}`}
            placeholder="Reference..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => handleFocus("username")}
          />
        </div>
        {errorUsername && <p className="text-danger">{errorUsername}</p>}

        <div className="input-group mb-2">
          <div className="input-group-text">
            <TbLockPassword style={{ color: errorPassword ? 'red' : '#aaa' }} />
          </div>
          <input
            type="password"
            className={`form-control ${errorPassword ? 'is-invalid' : ''}`}
            placeholder="Mot de passe..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => handleFocus("password")}
          />
        </div>
        {errorPassword && <p className="text-danger">{errorPassword}</p>}

        <div className="d-flex justify-content-between align-items-center mt-2">
          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Connexion
          </button>
        </div>
        
        <div className="text-center mt-3">
          <button className="btn btn-link" onClick={() => setShowForgotPassword(true)}>Mot de passe oublié ?</button>
        </div>
      </div>

      {showForgotPassword && (
        <div className="bg-white p-4 rounded shadow-sm position-absolute" style={{ top: '55%', transform: 'translateY(-50%)', width: '30%' ,fontWeight:'bold'}}>
          <h5 className="mb-3">Réinitialisation du mot de passe</h5>
          <input
            type="text"
            className={`form-control ${forgotError ? 'is-invalid' : ''}`}
            placeholder="Entrez votre reference..."
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
          />
          {forgotError && <p className="text-danger mt-1">{forgotError}</p>}
          {forgotSuccess && <p className="text-success mt-1">{forgotSuccess}</p>}
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" onClick={() => setShowForgotPassword(false)}>Annuler</button>
            <button className="btn btn-primary" onClick={handleForgotPassword}>Envoyer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;


