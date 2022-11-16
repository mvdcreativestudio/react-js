import React from 'react';
import '../CartIcon/CartIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/cartContext';



export const CartIcon = () => {

    const { totalProducts } = useCartContext();

    return(
        <div className='contenedor-icono'>
            <FontAwesomeIcon icon={faShoppingCart} className="iconoCart"/>
            <span className="contadorCart">{totalProducts() || ''}</span>
        </div>
    )
}

export default CartIcon;