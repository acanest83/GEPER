function NavBar() {

    return (
        <ul className="nav nav-underline" style={{ backgroundColor: "white", padding: "30px" }}>
            <li className="nav-item">
                {/* Utiliza la ruta relativa desde la carpeta public */}
                <img src="/EJERCITO DE TIERRA.png" alt="Ejercito Logo" style={{ width: '80px', height: '70px' }} />
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    )
}

export default NavBar;