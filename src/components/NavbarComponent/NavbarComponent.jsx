import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardWidgetComponent } from "../CardWidgetComponent"
import { CartWidgetComponent } from '../CartWidgetComponent';
import { CartContext } from './../../context/CartContext';

export const NavbarComponent = () => {

    const { cart } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
            <div className="container-fluid">
                <CardWidgetComponent />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStore" aria-controls="navbarStore" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarStore">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                Todas las Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to={'/category/tecnologia'} className="dropdown-item">Tecnología</Link></li>
                                <li><Link to={'/category/deportes'} className="dropdown-item">Deportes</Link></li>
                                <li><Link to={'/category/vehiculos'} className="dropdown-item">Vehículos</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light">Favoritos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light">Vender</a>
                        </li>
                    </ul>
                    {cart.length > 0 && <CartWidgetComponent />}
                </div>
            </div>
        </nav>
    );

}