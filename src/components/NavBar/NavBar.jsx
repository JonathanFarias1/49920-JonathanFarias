import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"; // Importa la hoja de estilos
import logo from "../../assets/cryptoMineLogo.png"; // Se le designa un nombre a la imagen
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item active">
            <Link to="/category/inversion-basica" className="nav-link">Inversión Básica</Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Servicio Cotizador de Asics
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/category/propuesta-maquinas" className="dropdown-item">Propuesta de Máquinas</Link>
              <Link to="/category/ultima-cotizacion" className="dropdown-item">Última Cotización</Link>
              <Link to="/category/configuracion-propiedades" className="dropdown-item">Configuración Propiedades</Link>
              <div className="dropdown-divider"></div>
              <Link to="/category/asics" className="dropdown-item">Asics</Link>
              <Link to="/category/asics/s19-series" className="dropdown-item">S19 Series</Link>
              <Link to="/category/asics/s9-series" className="dropdown-item">S9 Series</Link>
              <Link to="/category/asics/hydro-series" className="dropdown-item">Hydro Series</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link to="/carrito" className="nav-link"><CartWidget /></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
