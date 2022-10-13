import React from "react";
import "./ItemDetail.css"
import {Item} from "../Item/Item"
import { Link } from "react-router-dom";

export const ItemDetail = ({data}) => {
    return (
        <div className="d-flex col-12 justify-content-center pt-5">
            <div className="d-flex justify-content-center">
                <img className="col-8" src={data.img} alt="" />
            </div>
            <div className="col-4">
                <h2 className="tituloProducto">{data.nombre}</h2>
                <h4 className="precioAnterior">${data.oldPrice}</h4>
                <h4 className="precio">${data.precio}</h4>
                <p className="mt-5">Jean modelo Mom. Rígido sin lycra. La tela es blanda y se estira con el uso.</p>
                <div className="mt-5">
                    <h3 className="tituloTalle">Seleccionar Talle</h3>
                </div>
                <div className="d-flex justify-content-between col-4 mt-3">
                    <h5 className="selectorTalle text-center">S</h5>
                    <h5 className="selectorTalle text-center">M</h5>
                    <h5 className="selectorTalle text-center">L</h5>
                    <h5 className="selectorTalle text-center">XL</h5>
                    <h5 className="selectorTalle text-center">XXL</h5>
                </div>
            </div>
        </div>
    );
}

