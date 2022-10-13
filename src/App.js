import './App.css';
import {NavBar} from "./components/NavBar/NavBar.jsx";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";  
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Header/>     
          <Routes>
            <Route path ="/" element={<ItemListContainer/>}/>
            <Route path ="/ropa/:categoryName" element={<ItemListContainer/>}/>
            <Route path ="/producto/:id" element={<ItemDetailContainer/>}/>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
