import React, { useState } from 'react';

function Profile() {
  const [hover, setHover] = useState(false);
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '1000px' }}>
      <div className="card" style={{ width: '400px', border: "8px solid #808000",background:"black" }}>
        <div className="card-body text-center">
          <h5 className="card-title" style={{ color: "#808000", fontWeight: "bold" }}>Profile</h5>
          <form className="row g-3">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
              <label
                htmlFor="formFile"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
                Avatar
              </label>
              <img src="url_de_la_imagen" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="validationDefault01"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                required
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="validationDefault02"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
                Surname
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                required
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
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  required
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
                className="form-control"
                id="validationDefault03"
                required

              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="validationDefault04"
                className="form-label"
                style={{ color: "#808000", fontWeight: "bold" }}
              >
                Rank
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">Ninguno</option>
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
                id="validationDefault05"
                required
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
                required

              />
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary"
                style={{
                  borderColor: "#808000",
                  borderWidth: "3px",
                  backgroundColor: hover ? "black" : "olive",
                  color: hover ? "white" : "white",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                  marginTop: "20px"
                }}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Profile;

