import './App.css';
import {NavBar} from "./components/NavBar/NavBar.jsx";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";  
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from './context/cartContext';
import Cart from './components/Cart/cart';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <CartProvider>
            <NavBar/>
            <Header/>     
            <Routes>
              <Route path ="/" element={<ItemListContainer/>}/>
              <Route path ="/categorias/:categoryName" element={<ItemListContainer/>}/>
              <Route path ="/producto/:productoId" element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </CartProvider>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
