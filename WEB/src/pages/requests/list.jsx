import React, { useState, useEffect } from 'react';
import { getApprovedRequests, formRequest, getDeniedRequests } from "../../services/api-service";

function ApprovedList() {
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const approvedRequests = await getApprovedRequests();
        const pendingRequests = await formRequest();
        const denied = await getDeniedRequests();

        const combinedRequests = [...pendingRequests, ...approvedRequests, ...denied];
        setAllRequests(combinedRequests);

      } catch (error) {
        console.error('Error al obtener formularios:', error);
      }
    };

    fetchAllRequests();
  }, []);

  return (
    <div>
      <h1 className="mb-4" style={{ color: 'Tan'}}>All Requests</h1>
      {allRequests.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {allRequests.map((form) => (
            <div key={form.id} className="col">
              <div 
                className={`card h-100 ${form.status === 'Approved' ? 'border-success' : form.status === 'Denied' ? 'border-danger' : ''}`}
                style={{ backgroundColor: 'black', color: 'Tan' }}
              >
                <div className="card-body">
                  <h5 className="card-title">{form.rank}</h5>
                  <h5 className="card-title">{form.surname}</h5>
                  <p className="card-text">Type: {form.requestType}</p>
                  <h5 className="card-title">From: {form.periodFrom}</h5>
                  <h5 className="card-title">To: {form.periodTo}</h5>
                  <h5 className="card-title">Comments: {form.comments}</h5>

                  {form.status === 'Approved' && 
                    <span className="badge bg-success" style={{ fontSize: '20px', marginTop: '25px' }}>
                      Aprobada
                    </span>
                  }
                  {form.status === 'Denied' && 
                    <span className="badge bg-danger" style={{ fontSize: '20px', marginTop: '25px' }}>
                      Denied
                    </span>
                  }
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