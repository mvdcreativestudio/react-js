import '../ItemListContainer/ItemListContainer.css';

// const stockProductos = [
//     {id: 1, nombre: "Jean Vogue", tipo: "Buzo", cantidad: 1, precio: 1200, img: './assets/img/productos/jean-vogue.png'},
//     {id: 2, nombre: "Campera Classy", tipo: "Campera", cantidad: 1, precio: 2400, img: './assets/img/productos/campera-classy.png'},
//     {id: 3, nombre: "Conjunto Pink", tipo: "Conjunto", cantidad: 1, precio: 3600, img: './assets/img/productos/conjunto-pink.png'},
//     {id: 4, nombre: "Camisa Stone", tipo: "Camisa", cantidad: 1, precio: 600, img: './assets/img/productos/camisa-stone.png'},
//     {id: 5, nombre: "Saco Green", tipo: "Saco", cantidad: 1, precio: 1900, img: './assets/img/productos/saco-green.png'},
//     {id: 6, nombre: "Vestido Mondrian", tipo: "Vestido", cantidad: 1, precio: 3900, img: './assets/img/productos/vestido-mondrian.png'},
// ]

export const ItemListContainer = ({greeting}) => {
    return (
        <div className="contenedorProductos d-flex col-12 justify-content-center pt-5">
            <h1>{greeting}</h1>
        </div>
    )
}

