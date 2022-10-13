import { useEffect } from "react";
import { Item } from "../Item/Item"

export const ItemList = ({data=[]}) => {
    return (
        data.map (elemento => <Item key={elemento.id} nombre={elemento.nombre} tipo={elemento.tipo} cantidad={elemento.cantidad} precio={elemento.precio} imagen={elemento.img} product={elemento} />)
        )
}