import React from "react";   //Creamos la importacion de la clase react para poder agregar los componentes
import "./App.css"; //Usamos llaves para traer cosas de JS  //Importamos los estilos
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";
//Se importa el componente

import Header from "./components/Header/header"
class App extends React.Component{

  render() {
    return(
      <div className="App">
        <Header />
        <ItemListContainer greeting="Hola Bienvenido Al carrito Electronico" />
      </div>
    )
  }
}


export default App;