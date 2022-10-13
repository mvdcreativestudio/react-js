import { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css"
import {productos} from "../../assets/BaseDeDatos/BaseDeDatos"
import {ItemList} from "../ItemList/ItemList"
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {
    
    const {categoryName} = useParams();
    const {estado} = useParams();

    const [data,setData] = useState ([]);
    
    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve (productos)
            }, 1000);
        });
        if (categoryName){
            getData.then (res => setData(res.filter(productos => productos.categoria === categoryName)));
        } else {
            getData.then (res => setData (res.filter(productos => productos.estado === "destacado")));
        }
        
    }, [categoryName])


    return (
        <div className="m-5">
            <div className="d-flex justify-content-center pb-5">
                <h1>Productos Destacados</h1>
            </div>
            <div className="d-flex flex-wrap col-12">
                <ItemList data={data}></ItemList>
            </div>  
            
        </div>
    )
}
