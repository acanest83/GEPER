import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { formRequest, formApproved, formDenied } from '../../services/api-service';

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function PendingList() {
  const [pendingForms, setPendingForms] = useState([]);
  const [approvedSuccess, setApprovedSuccess] = useState(false);
  const [comments, setComments] = useState('');
  const [hoverApproved, setHoverApproved] = useState(false);
  const [hoverDenied, setHoverDenied] = useState(false);
  const [commentsError, setCommentsError] = useState('');

  useEffect(() => {
    const fetchPendingForms = async () => {
      try {
        const forms = await formRequest();
        setPendingForms(forms);
      } catch (error) {
        console.error('Error al obtener formularios pendientes:', error);
      }
    };

    fetchPendingForms();
  }, []);

  const handleFormAction = async (formId, action) => {
    try {
      if (action === 'approved') {
        const response = await formApproved(formId, action, comments);
        console.log('Estado del formulario actualizado con éxito:', response);
        // Actualizar el estado solo si la acción fue exitosa
        setApprovedSuccess(true);
      } else if (action === 'denied') {
        if (comments.trim() !== '') {
          const response = await formDenied(formId, action, comments);
          console.log('Solicitud denegada con éxito:', response);
          // Actualizar el estado solo si la acción fue exitosa
          setApprovedSuccess(true);
        } else {
          setCommentsError('Los comentarios son obligatorios para denegar una solicitud.');
        }
      }
    } catch (error) {
      console.error('Error al actualizar el estado del formulario:', error.message);
    }
  };

  if (approvedSuccess) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <h2 style={{ color: 'Tan', fontWeight: 'bold', fontSize: '50px' }}>Pending Forms</h2>
      {pendingForms.length === 0 ? (
        <p style={{ color: 'Tan', fontWeight: 'bold', fontSize: '30px', padding: '40px', marginLeft: '25px', marginTop: '35px' }}>
          No forms are pending, good Job!!
        </p>
      ) : (
        <div>
          {pendingForms.map((form) => (
            <div key={form.id} className="card mb-3" style={{ borderColor: '#808000', borderWidth: '5px' }}>
              <div className="card-body" style={{ backgroundColor: 'black' }}>
                <h5 className="card-title" style={{ color: '#808000', fontWeight: 'bold', fontSize: '30px' }}>
                  Form Information
                </h5>
                <form>
                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
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
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
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
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
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
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
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
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
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
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
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
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
                    >
                      Reasons:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px"}}
                      value={form.reasons}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
                    >
                      Period From:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={formatDate(form.periodFrom)}
                      readOnly
                    />
                    <label
                      className="form-label"
                      style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}
                    >
                      Period To:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderColor: "#808000", borderWidth: "5px" }}
                      value={formatDate(form.periodTo)}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label"  style={{color: "#808000", fontWeight: "bold",marginTop:"10px"}}>
                      Comments:
                    </label>
                    <textarea
                      className="form-control"
                      value={comments}
                      style={{ borderColor: '#808000', borderWidth: '5px' }}
                      onChange={(e) => setComments(e.target.value)}
                    />
                    {commentsError && <p style={{ color: 'red' }}>{commentsError}</p>}
                  </div>

                 <button
                    type="button"
                    className="btn btn-primary"
                    key={form.id}
                    style={{
                      borderColor: '#808000',
                      borderWidth: '3px',
                      height: '50px',
                      width: '110px',
                      backgroundColor: hoverApproved ? 'black' : 'olive',
                      color: hoverApproved ? 'white' : 'white',
                      fontWeight: 'bold',
                      transition: 'background-color 0.3s',
                      marginTop: "10px",
                    }}
                    onClick={() => handleFormAction(form.id, 'approved')}
                    onMouseOver={() => setHoverApproved(true)}
                    onMouseOut={() => setHoverApproved(false)}
                  >
                    Approved
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderColor: '#808000',
                      borderWidth: '3px',
                      width: '110px',
                      height: '50px',
                      backgroundColor: hoverDenied ? 'LightCoral' : 'red',
                      color: hoverDenied ? 'white' : 'white',
                      fontWeight: 'bold',
                      marginLeft: '25px',
                      transition: 'background-color 0.3s',
                      marginTop: "10px",
                    }}
                    onClick={() => handleFormAction(form.id, 'denied')}
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
