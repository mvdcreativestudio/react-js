import { getFirestore, addDoc, collection } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCart from "../ItemCart/itemCart";
import './cart.css';
import Swal from 'sweetalert2';

const Cart = () => {
    const { cart , totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Mikaela',
            email: 'mikaela@gmail.es',
            phone: '+59898112215',
            address: 'Rivera 1703'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    }


    const alertaCompra = () => {
        Swal.fire("Su compra ha sido realizada con éxito");
    }

    const handleClick = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then (({ id }) => console.log(id));
        alertaCompra();

    }

    if (cart.length === 0) {
        return (
            <div>
                <div className="d-flex justify-content-center pb-5">
                    <h1>Carrito</h1>
                </div>
                <div className="d-flex justify-content-center text-center pb-5">
                    <div>
                        <h4 className="pb-5">No hay elementos en el carrito</h4>
                        <Link to= '/'><button className="btn btn-primary">Regresar a la tienda</button></Link>
                    </div>
                </div>
                

            </div>
        );
    }

    return (
        <div>
            <div className="d-flex justify-content-center pb-5">
                <h1 className="pt-5">Carrito</h1>
            </div>
            <div className="d-flex col-12 justify-content-center text-center pb-5">
                <div className="col-8 d-flex flex-wrap">
                    {
                        cart.map (product => <ItemCart key={product.id} product={product} />)
                    }
                </div>
                
            </div>
            

            <div className="d-flex justify-content-center">
                <h4>Total: ${totalPrice()} </h4>
            </div>
            <div className="d-flex justify-content-center pt-3 pb-5">
                <button onClick={handleClick} className="botonFinalizarCompra">Finalizar Compra</button>
            </div>
                
        </div>
    )
}
 

export default Cart;