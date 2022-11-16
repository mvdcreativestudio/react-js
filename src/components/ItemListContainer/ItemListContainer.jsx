import { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import {ItemList} from "../ItemList/ItemList"
import { useParams } from "react-router-dom";



export const ItemListContainer = ({ }) => {

    const [data, setData] = useState([]);

    const { categoryName } = useParams();
    
    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoryName) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoryName))
            getDocs(queryFilter)
                .then (res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }   else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }
        }, [categoryName])


    return (
        <div className="m-5">
            <div className="d-flex justify-content-center pb-5">
                <h1 className="tituloCategoria">{categoryName}</h1>
            </div>
            <div className="d-flex flex-wrap col-12">
                <ItemList data={data}></ItemList>
            </div>  
        </div>
    )
}
