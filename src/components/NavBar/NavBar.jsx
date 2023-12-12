import "./Header.css"; // Importa la hoja de estilos
import logo from "../../assets/cryptoMineLogo.png"  //Se le designa un nombre a la imagen
import CartWidget from "../CartWidget/CartWidget";

import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#"><img src={logo} alt="Logo" /> </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Inversión Básica</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Servicio Cotizador de Asics
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Propuesta de Máquinas</a>
            <a className="dropdown-item" href="#">Última Cotización</a>
            <a className="dropdown-item" href="#">Configuración Propiedades</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> <CartWidget /></a>
         
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar