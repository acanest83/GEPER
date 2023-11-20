import { formRequest } from "../../services/api-service";
import React, { useState, useEffect } from 'react';

function PendingList() {
  const [pendingForms, setPendingForms] = useState([]);

  const [hoverApproved, setHoverApproved] = useState(false);
  const [hoverDenied, setHoverDenied] = useState(false);

  useEffect(() => {
    const fetchPendingForms = async () => {
      try {
        const forms = await formRequest();
        setPendingForms(forms);
      } catch (error) {
        // Manejar el error si es necesario
      }
    };

    fetchPendingForms();
  }, []);

  return (
    <div>
      <h2 style={{ color: "Tan", fontWeight: "bold", fontSize: "50px" }}>Formularios Pendientes</h2>
      {pendingForms.length === 0 ? (
        <p>No hay formularios pendientes.</p>
      ) : (
        <div>
          {pendingForms.map((form) => (
            <div key={form.id} className="card mb-3" style={{ borderColor: "#808000", borderWidth: "5px" }}>
              <div className="card-body" style={{ backgroundColor: "black" }}>
                <h5 className="card-title" style={{ color: "#808000", fontWeight: "bold", fontSize: "30px" }}>Información del Formulario</h5>
                <form>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Request Type:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.requestType}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.name}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Surname:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.surname}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      TIM:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.tim}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Telephone:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.telephone}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.email}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Reasons:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.reasons}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Period From:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.periodFrom}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Period To:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={form.periodTo}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{ color: "#808000", fontWeight: "bold" }}
                    >
                      Comments:
                    </label>
                    <textarea
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      borderColor: "#808000",
                      borderWidth: "3px",
                      height: "50px",
                      width: "110px",
                      backgroundColor: hoverApproved ? "black" : "olive",
                      color: hoverApproved ? "white" : "white",
                      fontWeight: "bold",
                      transition: "background-color 0.3s"
                    }}
                    onMouseOver={() => setHoverApproved(true)}
                    onMouseOut={() => setHoverApproved(false)}
                  >
                    Approved
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      borderColor: "#808000",
                      borderWidth: "3px",
                      width: "110px",
                      height: "50px",
                      backgroundColor: hoverDenied ? "LightCoral" : "red",
                      color: hoverDenied ? "white" : "white",
                      fontWeight: "bold",
                      marginLeft: "25px",
                      transition: "background-color 0.3s"
                    }}
                    onMouseOver={() => setHoverDenied(true)}
                    onMouseOut={() => setHoverDenied(false)}
                  >
                    Denied
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default PendingList;
