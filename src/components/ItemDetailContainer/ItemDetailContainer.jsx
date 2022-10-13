import React, {useState, useEffect} from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail"
import JeanVogue from "../../assets/imgProductos/jean-vogue.png"

const product = {id: 1, nombre: "Jean Vogue", categoria: "jeans", estado: "destacado", cantidad: 1, precio: 1200, oldPrice: 1900, img: JeanVogue}

export const ItemDetailContainer = () => {

    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(product);
            }, 1000);
        });

        getData.then (res => setData(res))
    }, [])



    return (
        <ItemDetail data={data}/>
    );
}
