import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();

  useEffect(() => {
    console.log(`Cargando productos para la categoría: ${id}`);
  }, [id]);

  return (
    <div className="contenedorA">
      <p>{greeting}</p>
      <Link to="/asic/1">Asic</Link>
    </div>
  );
};

export default ItemListContainer;
