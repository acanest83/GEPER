import React, { useState, useEffect } from 'react';
import { getApprovedRequests, formRequest } from "../../services/api-service";

function ApprovedList() {
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const approvedRequests = await getApprovedRequests();
        const pendingRequests = await formRequest();

        const combinedRequests = [...pendingRequests, ...approvedRequests];

        setAllRequests(combinedRequests);
      } catch (error) {
        console.error('Error al obtener formularios:', error);
      }
    };

    fetchAllRequests();
  }, []);

  return (
    <div>
      <h1 className="mb-4" style={{ color: 'Tan'}}>All Request</h1>
      {allRequests.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {allRequests.map((form) => (
            <div key={form.id} className="col">
              <div 
              style={{ backgroundColor: 'black', color: 'Tan'}}
              className={`card h-100 ${form.status === 'Approved' ? 'border-success' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title">{form.rank}</h5>
                  <h5 className="card-title">{form.surname}</h5>
                  <p className="card-text">Type: {form.requestType}</p>
                  <h5 className="card-title">{form.periodFrom}</h5>
                  <h5 className="card-title">{form.periodTo}</h5>
                  {form.status === 'Approved' && 
                  <span className="badge bg-success" 
                  style={{ fontSize: '20px', marginTop: '25px'}}
                  >
                  Aprobada
                  </span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>There are no request at the moment.</p>
      )}
    </div>
  );
}

export default ApprovedList;