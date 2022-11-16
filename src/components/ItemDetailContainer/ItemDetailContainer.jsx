import React, {useState, useEffect} from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";


 
export const ItemDetailContainer = () => {

    const [data, setData] = useState ({});
    const { productoId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', productoId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [productoId])



    return (
        <ItemDetail data={data}/>
    );
}
