
export const NavbarComponent = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" width="50" height="50" />
                    myStore
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Todas las Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item">Tecnología</a></li>
                                <li><a className="dropdown-item">Hogar</a></li>
                                <li><a className="dropdown-item">Moda</a></li>
                                <li><a className="dropdown-item">Propiedades</a></li>
                                <li><a className="dropdown-item">Vehículos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Favoritos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Vender</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar productos.." aria-label="Search" />
                        <button className="btn btn-outline-success">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );

}