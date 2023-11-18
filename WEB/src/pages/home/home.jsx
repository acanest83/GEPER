import React, { useState, useEffect } from "react";
import { goHome } from "../../services/api-service";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState({ pendingRequests: [], allUsers: [] });
  const [hoverHome, setHoverHome] = useState(false);

  useEffect(() => {
    goHome()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error('Error en la solicitud:', err);
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1>Home</h1>
      <>
        <div>
          <h2>Pending Requests</h2>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pending Requests</h5>
              <ul>
                {data.pendingRequests.map((request) => (
                  <li key={request._id}>{request.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2>All Users</h2>
          <div className="row">
            {data.allUsers.map((user) => (
              <div key={user._id} className="col-md-4 mb-3">
                <div className="card">
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
          className="btn btn-primary"
          style={{
            borderColor: "#808000",
            borderWidth: "3px",
            backgroundColor: hoverHome ? "black" : "olive",
            color: hoverHome ? "white" : "white",
            fontWeight: "bold",
            transition: "background-color 0.3s"
          }}
          onMouseOver={() => setHoverHome(true)}
          onMouseOut={() => setHoverHome(false)}
        >
          Crear Solicitud
        </Link>
      </>
    </div>
  );
}

export default Home;
