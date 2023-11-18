function NavBar() {
    const handleLogout = () => {
      logoutApi()
        .then(() => {
          // Aquí puedes redirigir a la página de inicio de sesión u realizar otras acciones necesarias
          console.log("Logout exitoso");
        })
        .catch((err) => {
          console.error('Error durante el logout:', err);
        });
    };
  
    return (
      <ul className="nav nav-underline" style={{ backgroundColor: "white", padding: "30px" }}>
        <li className="nav-item">
          {/* Utiliza la ruta relativa desde la carpeta public */}
          <img src="/EJERCITO DE TIERRA.png" alt="Ejercito Logo" style={{ width: '80px', height: '70px' }} />
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger" onClick={() => handleLogout()}>
            Logout
          </button>
        </li>
      </ul>
    );
  }
  
  export default NavBar;
  