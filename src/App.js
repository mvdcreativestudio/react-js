import './App.css';
import {NavBar} from "./components/NavBar/NavBar.jsx";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {Header} from "./components/Header/Header"



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Header/>
        <ItemListContainer greeting="Productos Destacados"/>
        <div id='contenedor-productos'></div>
      </header>
    </div>
  );
}

export default App;
