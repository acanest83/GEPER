import React, { useState } from 'react';
import { login } from "../../services/api-service";
import { useAuthContext } from "../../contexts/auth-context";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";

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

    login({ email, password }).then((response) => {
      onLogin(response);
      setLoginSuccess(true); 
    });
  };

  if (loginSuccess) {
    return  <Navigate to="/home"/>
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "1000px", borderRadius: "10px" }}>
      <div className="card" style={{ width: "400px", height: "300px", border: "8px solid #808000",backgroundColor:"black" }}>
        <div className="card-body">
          <h5 className="card-title mb-3" style={{ color: "#808000", fontWeight: "bold" }}>Login</h5>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} >
            <div className="col-12 mb-3">
              <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
              <input
                type="email"
                className="form-control"
                id="staticEmail2"
                placeholder="Email"
                style={{ borderColor: "#808000", borderWidth: "3px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-12 mb-3">
              <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
                style={{ borderColor: "#808000", borderWidth: "3px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="col-12 mb-3 d-flex justify-content-between">
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  borderColor: "#808000",
                  borderWidth: "3px",
                  height: "60px",
                  backgroundColor: hoverAccess ? "black" : "olive",
                  color: hoverAccess ? "white" : "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "15px",
                  transition: "background-color 0.3s"
                }}
                onMouseOver={() => setHoverAccess(true)}
                onMouseOut={() => setHoverAccess(false)}
              >
                Access
              </button>

              <Link
                to="/register"
                className="btn btn-primary mb-3"
                style={{
                  borderColor: "#808000",
                  borderWidth: "3px",
                  height: "60px",
                  backgroundColor: hoverSignUp ? "black" : "olive",
                  color: hoverSignUp ? "white" : "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: "38px",
                  marginTop: "15px",
                  transition: "background-color 0.3s"
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