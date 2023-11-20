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
      <h1 style={{ color: "Tan", fontWeight: "bold"}}>Work Space</h1>
      <>
        <div>
          <h2
            style={{ color: "Tan", fontWeight: "bold", paddingTop: "40px", paddingBottom: "20px" }}
          >
            Pending Requests
          </h2>

          <div className="card" style= {{border: "5px solid #808000",backgroundColor:"black", color :"Tan"}}>
            <div className="card-body" >
              <h5 className="card-title" >Pending Requests</h5>
              <ul>
                {data.pendingRequests.map((request) => (
                  <li key={request._id}>{request.requestType} {request.rank} {request.surname}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '40px' }}>
          <h2 style={{ color: "Tan", fontWeight: "bold" }}>Your Team</h2>
          <div className="row">
            {data.allUsers.map((user) => (
              <div key={user._id} className="col-md-4 mb-5" >
                <div className="card" style={{ borderColor: "#808000", borderWidth: "5px",color:"Tan",backgroundColor:"black" }}>
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
            backgroundColor: hoverHome ? "olive" : "black",
            color: hoverHome ? "White" : "Tan",
            fontWeight: "bold",
            transition: "background-color 0.3s"
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
