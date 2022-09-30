import '../NavBar/NavBar.css';
import logo from '../../assets/logo.png';
import {CartIcon} from '../CartIcon/CartIcon';

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
                                    <a className="nav-link active" aria-current="page" href="#top">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Remeras</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Jeans</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Vestidos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Accesorios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Calzado</a>
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