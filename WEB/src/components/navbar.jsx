import React, { useState, useEffect } from 'react';
import { logoutApi } from "../services/api-service";
import { Navigate } from "react-router-dom";
import { useAuthContext } from '../contexts/auth-context';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [outSuccess, setOutSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { user, onLogout } = useAuthContext();

  const handleLogout = () => {
    logoutApi()
      .then(() => {
        console.log("Logout exitoso");
        setOutSuccess(true);
        onLogout();
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
    <div style={{ backgroundColor: "black", padding: "30px", display: "flex", justifyContent: "space-between" }}>

      <span style={{ fontSize: "30px", color: "#808000", marginTop: "20px" }}>
        <strong>GEPER</strong> | {user && (
          <Link to="/profile" style={{ color: "#808000" }}>{user.email}</Link>
        )}
      </span>

      <ul className="nav nav-underline" style={{ marginLeft: -350, padding: 0 }}>
        <li className="nav-item" >
          <img src="/EJERCITO DE TIERRA.png" alt="Ejercito Logo" style={{ width: '80px', height: '80px' }} />
        </li>
        <li className="nav-item" >
          <a className="nav-link" aria-current="page" href="/register"
            style={{ fontSize: '23px', padding: "20px", color: " #808000", fontWeight: "bold" }}>
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
          <a className="nav-link" aria-current="page" href="/requests/approved"
            style={{ fontSize: '23px', padding: "20px", color: " #808000", fontWeight: "bold" }}>
            All Requests
          </a>
        </li>
      </ul>
      <div style={{ padding: "20px", marginTop: "10px" }}>
        {user && (
          <button className="btn btn-danger"
            style={{
              display:"flex",
              width: "125px",
              height: "45px",
              fontSize: "20px",
              fontWeight: "bold"
            }}
            onClick={() => handleLogout()}
          >
            <FontAwesomeIcon icon={faSignOut} style={{ fontSize: '20px', color: 'white', marginRight: '1px',padding:"5px"}}/>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
export default NavBar;
