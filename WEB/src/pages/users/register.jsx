import { useState } from 'react';
import { createUser } from '../../services/api-service';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    tim: '',
    rank: '',
    telephone: '',
    password: '',
    avatar: null,
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'avatar' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await createUser(formData);
      console.log('User created successfully:', response.data);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Error creating user:', error);
      if (error.response) {
        // La solicitud fue hecha y el servidor respondió con un estado diferente de 2xx//
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta//
        console.error('No response received. Request details:', error.request);
      } else {
        // Algo sucedió en la configuración de la solicitud que desencadenó un error//
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  if (registrationSuccess) {
    return (
      <div>
        <p>User registration successful!</p>
        <p>
          Go to <Link to="/login">Login</Link> page.
        </p>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '700px' }}>
      <div className="card" style={{ width: '800px' }}>
        <div className="card-body">
          <h5 className="card-title">Register</h5>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="validationDefault01" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault02" className="form-label">
                Surname
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefaultUsername" className="form-label">
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault03" className="form-label">
                TIM
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                name="tim"
                value={formData.tim}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault04" className="form-label">
                Rank
              </label>
              <select
                className="form-select"
                id="validationDefault04"
                name="rank"
                value={formData.rank}
                onChange={handleInputChange}
                required
              >
                <option disabled value="">
                  Ninguno
                </option>
                <option>Teniente Coronel</option>
                <option>Comandante</option>
                <option>Capitán</option>
                <option>Teniente</option>
                <option>Subteniente</option>
                <option>Brigada</option>
                <option>Sargento Primero</option>
                <option>Sargento</option>
                <option>Cabo 1º</option>
                <option>Cabo</option>
                <option>Soldado</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault05" className="form-label">
                Telephone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="validationDefault05"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault06" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="validationDefault06"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Avatar
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="avatar"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

