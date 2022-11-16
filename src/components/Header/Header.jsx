import HeaderImg from '../../assets/full1adidasnmd.jpg'
import {NavLink} from "react-router-dom";
import '../Header/Header.css';

export const Header = () => {
    return (
        <div>
            <NavLink to='/producto/B4ObnE1Ofgjg0qcdkRPn'><img className='imgHeader' src={HeaderImg} alt='logo'/></NavLink>
        </div>
    )
}