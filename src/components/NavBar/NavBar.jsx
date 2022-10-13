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
                                    <NavLink to="/ropa/jeans" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Jeans</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/ropa/camperas" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Camperas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/ropa/conjuntos" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Conjuntos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/ropa/camisas" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Camisas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/ropa/sacos" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Sacos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/ropa/vestidos" className="nav-link {({isActive})=> === true ? 'claseActiva' : ''}" aria-current="page">Vestidos</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <CartIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}