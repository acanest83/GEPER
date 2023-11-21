import React, { useState, useEffect } from 'react';
import { logoutApi } from "../services/api-service";
import { Navigate } from "react-router-dom";

function NavBar() {
  const [outSuccess, setOutSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    logoutApi()
      .then(() => {
        console.log("Logout exitoso");
        setOutSuccess(true);
      })
      .catch((err) => {
        console.error('Error durante el logout:', err);
        setError('Error durante el logout. Por favor, inténtalo de nuevo.');
      });
  };

  useEffect(() => {
    if (outSuccess) {
      setOutSuccess(false);
      setError(null);
    }
  }, [outSuccess]);

  if (outSuccess) {
    return <Navigate to="/login" />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul className="nav nav-underline" style={{ backgroundColor: "black", padding: "30px" }}>
      <li className="nav-item" >
        <img src="/EJERCITO DE TIERRA.png" alt="Ejercito Logo" style={{ width: '80px', height: '80px' }}/>
      </li>
      <li className="nav-item" >
        <a className="nav-link active" aria-current="page" href="/register"
          style={{ fontSize: '23px', padding: "20px", color: " #808000" }}>
          Register
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="/requests/create"
          style={{ fontSize: '23px', padding: "20px", fontWeight: "bold", color: " #808000" }}>
          Requests
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/home"
          style={{ fontSize: '23px', padding: "20px", fontWeight: "bold", color: " #808000" }}>
         Work Space
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/requests/pending"
          style={{ fontSize: '23px', padding: "20px", fontWeight: "bold", color: " #808000" }}>
          Pending Requests
        </a>
      </li>
      <li className="nav-item" >
        <a className="nav-link active" aria-current="page" href="/requests/approved"
          style={{ fontSize: '23px', padding: "20px", color: " #808000" }}>
          Approve Request
        </a>
      </li>

      <li className="nav-item" style={{ padding: "20px" }}>
        <button className="btn btn-danger"
          style={{ width: "90px", height: "45px", fontSize: '20px' }} onClick={() => handleLogout()}>
          Logout
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
