import React from "react";
import { useCartContext } from "../../context/cartContext";
import './itemCart.css';

const ItemCart = ({ product }) =>  {

    const { removeProduct } = useCartContext ();

    return (
        <div className="itemCart">
            <img src={product.img} alt={product.title} />
            <div>
                <h4>{product.title}</h4>
                <h6 className="pb-0 mb-0">{product.quantity} Unidad/es</h6>
                <p className="pt-0 mt-0">${product.price} c/u</p>
                <h4>${product.price * product.quantity}</h4>
                <div>
                    <button onClick={() => removeProduct(product.id)} className="botonEliminar">Eliminar</button>
                </div>
                
            </div>

        </div>
    )
}

export default ItemCart;