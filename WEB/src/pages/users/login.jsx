function Login() {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: '600px' }}>
        <div className="card" style={{ maxWidth: "300px"}}>
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <form className="row g-3">
              <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                <input type="email" className="form-control" id="staticEmail2" placeholder="Email"/>
              </div>
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Access</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;