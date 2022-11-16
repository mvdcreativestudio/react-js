import React, {useState} from "react";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import ItemCount from '../itemCount/itemCount'
import { useCartContext } from "../../context/cartContext";

export const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="d-flex col-12 justify-content-center pt-5">
            <div className="d-flex justify-content-center">
                <img className="col-8" src={data.img} alt="" />
            </div>
            <div className="col-4">
                <h2 className="tituloProducto">{data.title}</h2>
                <h4 className="precio">${data.price}</h4>
                <p className="mt-5 mb-4">{data.descripcion}</p>
                <h6 className="stockDisponible">Stock disponible: <span className="green">{data.stock} unidades</span></h6>
                <div className="d-flex col-12 mt-3">
                    {
                        goToCart
                        ? <Link to= '/cart'><button className="botonAddToCart">Ver Carrito</button></Link>
                        : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

