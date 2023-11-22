import React, { useState, useEffect } from 'react';
import { getApprovedRequests, formRequest, getDeniedRequests, deleteRequest } from "../../services/api-service";

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Definir la función fetchAllRequests antes de su uso
const fetchAllRequests = async () => {
  try {
    const approvedRequests = await getApprovedRequests();
    const pendingRequests = await formRequest();
    const denied = await getDeniedRequests();

    const combinedRequests = [...pendingRequests, ...approvedRequests, ...denied];
    return combinedRequests;
  } catch (error) {
    console.error('Error al obtener formularios:', error);
    throw error;
  }
};

function ApprovedList() {
  const [allRequests, setAllRequests] = useState([]);
  const handleDelete = async (formId) => {
    try {
      await deleteRequest(formId);
      console.log('Solicitud eliminada con éxito');
      const updatedRequests = await fetchAllRequests();
      setAllRequests(updatedRequests);
    } catch (error) {
      console.error('Error al eliminar la solicitud:', error.message);
    }
  };

  useEffect(() => {
    // Llamar a fetchAllRequests al montar el componente
    const fetchData = async () => {
      const updatedRequests = await fetchAllRequests();
      setAllRequests(updatedRequests);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mb-4" style={{ color: "Tan" }}>All Request</h1>
      {allRequests.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 g-4" style={{ marginTop: "20px" }}>
          {allRequests.map((form) => (
            <div key={form.id} className="row mb-4">
              <div className="col">
                <div
                  className={`card h-100 ${form.status === "Approved" ? "border-success" : form.status === "Denied" ? "border-danger" : ''}`}
                  style={{ backgroundColor: 'black', color: 'Tan' }}
                >
                  <div className="card-body d-flex flex-column align-items-start">
                    <h5 className="card-title">{form.rank}</h5>
                    <h5 className="card-title">{form.surname}</h5>
                    <h5 className="card-text">Type: {form.requestType}</h5>
                    <h5 className="card-title">From: {formatDate(form.periodFrom)}</h5>
                    <h5 className="card-title">To: {formatDate(form.periodTo)}</h5>
                    <h5 className="card-title">Comments: {form.comments}</h5>

                    <div className="d-flex justify-content-between align-items-center w-100">
                      {form.status === 'Approved' &&
                        <span className="badge bg-success" style={{ fontSize: "20px", marginTop: "25px" }}>
                          Aprobada
                        </span>
                      }
                      {form.status === 'Denied' &&
                        <span className="badge bg-danger" style={{ fontSize: "20px", marginTop: "25px" }}>
                          Denied
                        </span>
                      }

                      <button
                        style={{ marginTop: "20px", fontWeight: "bold", fontSize: "17px", height: "35px" }}
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(form.id)}
                      >
                        Delete Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      ) : (
        <p style={{ fontSize: "30px", padding: "20px", color: "Tan" }}><strong>There are no request at the moment.</strong></p>
      )}
    </div>
  );
}

export default ApprovedList;