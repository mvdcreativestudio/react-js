import "./Item.css"
import {Link} from "react-router-dom"
import {ItemDetail} from "../ItemDetail/ItemDetail"

export const Item = ({product}) => {
    return(
        <div className="d-flex p-2 col-3">
            <div className="tarjetaProducto">
                <img src={product.img} className="img-producto" alt="" />
                <h3 className="nombreProducto m-2">{product.nombre}</h3>
                <p className="precioProducto m-2">${product.precio}</p>
                <Link to={`/producto/${product.id}`} className="btnAddToCart m-2">Ver Detalle</Link>
            </div>
            
        </div>
    )
}

export default Item;