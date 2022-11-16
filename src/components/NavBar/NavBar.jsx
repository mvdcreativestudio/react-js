import '../NavBar/NavBar.css';
import logo from '../../assets/logo.png';
import {CartIcon} from '../CartIcon/CartIcon';
import {Link, NavLink} from "react-router-dom";

export const NavBar = () => {
    

    return(
        <>
            <div className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark d-flex">
                <div className="container-fluid justify-content-between">
                    <div>
                        <img className='nav-logo img-fluid' src={logo} alt='logo'/>
                    </div>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/categorias/zapatillas" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Zapatillas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/categorias/remeras" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Remeras</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/categorias/buzos" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Buzos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/categorias/camperas" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Camperas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="categorias/pantalones" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Pantalones</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/accesorios" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Accesorios</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <NavLink to="/cart" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page"><CartIcon></CartIcon></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}