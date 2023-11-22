import React, { useState, useEffect } from "react";
import { goHome } from "../../services/api-service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [data, setData] = useState({ pendingRequests: [], allUsers: [] });
  const [hoverHome, setHoverHome] = useState(false);

  useEffect(() => {
    goHome()
      .then((data) => {
        const sortedUsers = data.allUsers.sort((a, b) => rankHierarchy.indexOf(a.rank) - rankHierarchy.indexOf(b.rank));
        setData({ pendingRequests: data.pendingRequests, allUsers: sortedUsers });
      })
      .catch((err) => {
        console.error('Error en la solicitud:', err);
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  // Definir jerarquía de rangos
  const rankHierarchy = [
    "Teniente Coronel",
    "Comandante",
    "Capitan",
    "Teniente",
    "Subteniente",
    "Brigada",
    "Sargento Primero",
    "Sargento",
    "Cabo Primero",
    "Cabo",
    "Soldado"
  ];

  return (
    <div className="container mt-4 position-relative">
      <h1 style={{ color: "Tan", fontWeight: "bold" }}>Welcome to your Work Space!</h1>
      <>
        <div>
          <h2
            style={{ color: "Tan", fontWeight: "bold", paddingTop: "40px", paddingBottom: "20px" }}
          >
            Pending Requests
          </h2>

          <div className="card" style={{ border: "5px solid #808000", backgroundColor: "black", color: "Tan" }}>
            <div className="card-body">
              <h5 className="card-title">Pending Requests</h5>
              <ul>
                {data.pendingRequests.map((request) => (
                  <li key={request._id}>
                    <Link
                      to={"/requests/pending"}
                      style={{ color: "#808000", fontSize: "20px" }}
                    >
                      {request.requestType} {request.rank} {request.surname}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="ml-auto" style={{ paddingTop: '40px' }}>
          <h2 style={{ color: "Tan", fontWeight: "bold" }}>Your Team</h2>
          <div className="row">
            {data.allUsers.map((user) => (
              <div key={user._id} className="col-md-4 mb-5">
                <div className="card" style={{ borderColor: "#808000", borderWidth: "5px", color: "Tan", backgroundColor: "black" }}>
                  <div className="card-body">
                    <h5 className="card-title">
                      {user.name} {user.surname}
                    </h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Tim: {user.tim}</p>
                    <p className="card-text">Rango: {user.rank}</p>
                    <p className="card-text">Role: {user.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/requests/create"
          className="btn btn-primary position-absolute top-0 end-0 mt-4"
          style={{
            width: "200px",
            height: "50px",
            borderColor: "#808000",
            borderWidth: "3px",
            backgroundColor: hoverHome ? "olive" : "black",
            color: hoverHome ? "White" : "Tan",
            fontWeight: "bold",
            fontSize: "20px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={() => setHoverHome(true)}
          onMouseOut={() => setHoverHome(false)}
        >
          Create Request
        </Link>
      </>
    </div>

  );
}

export default Home;

