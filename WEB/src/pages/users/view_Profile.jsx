function Profile() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '700px' }}>
      <div className="card" style={{ width: '400px' }}>
        <div className="card-body text-center"> {/* Agregamos la clase text-center */}
          <h5 className="card-title">Profile</h5>
          <form className="row g-3">
            <div className="col-md-12 d-flex align-items-center justify-content-center"> 
              <label htmlFor="formFile" className="form-label">Avatar</label>
              <img src="url_de_la_imagen" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault01" className="form-label">Name</label>
              <input type="text" className="form-control" id="validationDefault01" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault02" className="form-label">Surname</label>
              <input type="text" className="form-control" id="validationDefault02" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault03" className="form-label">TIM</label>
              <input type="text" className="form-control" id="validationDefault03" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault04" className="form-label">Rank</label>
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
              <label htmlFor="validationDefault05" className="form-label">Telephone Number</label>
              <input type="tel" className="form-control" id="validationDefault05" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault06" className="form-label">Password</label>
              <input type="password" className="form-control" id="validationDefault06" required />
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;

