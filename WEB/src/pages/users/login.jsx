import React, { useState } from 'react';
import { login } from "../../services/api-service";
import { useAuthContext } from "../../contexts/auth-context";
import { Link, Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useAuthContext();
  const [error, setError] = useState('');

  const [hoverAccess, setHoverAccess] = useState(false);
  const [hoverSignUp, setHoverSignUp] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');

    login({ email, password })
      .then((response) => {
        onLogin(response);
        setLoginSuccess(true);
      })
      .catch((error) => {
        setError('Invalid email or password. Please try again.');
      });
  };

  if (loginSuccess) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "900px" }}>
      <div className="card" style={{
        width: "400px",
        height: "500px",
        border: "7px solid  #808000",
        borderRadius: "8px",
        backgroundColor: "black"
      }}
      >
        <div className="card-body">
          <h5
            className="card-title mb-4"
            style={{ color: " #808000", fontWeight: "bold", textAlign: "center", fontSize: "30px" }}
          >
            Login
          </h5>

          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#808000", fontSize: "20px", fontWeight: "bold" }}
              >
                Email
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: "#808000" }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#808000", fontSize: "20px", fontWeight: "bold" }}
              >
                Password
              </label>

              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: "#808000" }}
              />
            </div>

            {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>}

            <div className="d-grid gap-2" style={{marginTop: "50px"}}>
              <button
                type="submit"
                className="btn btn"
                style={{
                  backgroundColor: hoverAccess ? "Peru" : " #808000",
                  color: "white",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                  fontSize: "20px",
                  marginTop: "-15px"
                }}
                onMouseOver={() => setHoverAccess(true)}
                onMouseOut={() => setHoverAccess(false)}
              >
                Access
              </button>

              <h5 style={{color:"#808000", marginTop:"45px", textAlign:"center"}}>
                Can't get through? Create an account
              </h5>

              <Link
                to="/register"
                className="btn btn-"
                style={{
                  backgroundColor: hoverSignUp ? "Peru" : "#808000",
                  color: "white",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                  fontSize: "20px", 
                  marginTop: "-5px",
                }}
                onMouseOver={() => setHoverSignUp(true)}
                onMouseOut={() => setHoverSignUp(false)}
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
