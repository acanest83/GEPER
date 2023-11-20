import { useState } from 'react';
import { createUser } from '../../services/api-service';
import { Navigate } from "react-router-dom";

function Register() {
  const [hover, setHover] = useState(false);
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
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received. Request details:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  if (registrationSuccess) {
    return  <Navigate to="/login"/>
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '1000px' }}>
      <div className="card common-form" style={{ width: '800px', border: "8px solid #808000",backgroundColor:"black"}}>
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#808000", fontWeight: "bold",fontSize:"30px" }}>Register</h5>
          <form className="row g-3" onSubmit={handleSubmit} style={{ marginTop: '15px'}}>
            <div className="col-md-6">
              <label htmlFor="validationDefault01" className="form-label" style={{ color: "#808000", fontWeight: "bold"}}>
                Name
              </label>
              <input
                type="text"
                placeholder="name"
                className="form-control"
                id="validationDefault01"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{ borderColor: "#808000", borderWidth: "3px" }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault02" className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>
                Surname
              </label>
              <input
                type="text"
                placeholder="surname"
                className="form-control"
                id="validationDefault02"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                required
                style={{ borderColor: "#808000", borderWidth: "3px" }}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="validationDefaultUsername"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
                Email
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  placeholder="email"
                  className="form-control"
                  id="validationDefaultUsername"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-describedby="inputGroupPrepend2"
                  required
                  style={{ borderColor: "#808000", borderWidth: "3px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <label
                htmlFor="validationDefault03"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
                TIM
              </label>
              <input
                type="text"
                placeholder="tim"
                className="form-control"
                id="validationDefault03"
                name="tim"
                value={formData.tim}
                onChange={handleInputChange}
                required
                style={{ borderColor: "#808000", borderWidth: "3px" }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault04" className="form-label" style={{ color: "#808000", fontWeight: "bold" }}>
                Rank
              </label>
              <select
                className="form-select"
                id="validationDefault04"
                name="rank"
                value={formData.rank}
                onChange={handleInputChange}
                required
                style={{ borderColor: "#808000", borderWidth: "3px" }}
              >
                <option disabled value="">
                  Ninguno
                </option>
                <option>Teniente Coronel</option>
                <option>Comandante</option>
                <option>Capitan</option>
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
              <label
                htmlFor="validationDefault05"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
                Telephone Number
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="Telephone Number"
                id="validationDefault05"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                required
                style={{ borderColor: "#808000", borderWidth: "3px" }}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="validationDefault06"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
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
                style={{ borderColor: "#808000", borderWidth: "3px" }}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="formFile"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
                Avatar
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                name="avatar"
                onChange={handleInputChange}
                style={{ borderColor: "#808000", borderWidth: "3px" }}
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  borderColor: "#808000",
                  borderWidth: "3px",
                  backgroundColor: hover ? "black" : "olive",
                  color: hover ? "white" : "white",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                  marginTop:"25px",
                }}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
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

