import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const match = useRouteMatch();
  const itemId = match.params.id;

  useEffect(() => {
    console.log(`Cargando detalles del producto con ID: ${itemId}`);
  }, [itemId]);

  const productDetails = {
    's19-series': {
      products: [
        {
          name: 'Antminer S19 Pro',
          description: 'El Antminer S19 Pro es uno de los últimos modelos de mineros de Bitmain.',
          image: require('../../assets/asic2.jpg').default,
        },
        {
          name: 'Otro Minero S19',
          description: 'Descripción del otro modelo S19.',
          image: require('../../assets/asic4.jpg').default,
        },
        {
          name: 'Más Minero S19',
          description: 'Descripción de otro modelo S19.',
          image: require('../../assets/asic5.jpg').default,
        },
      ],
    },
    's9-series': {
      products: [
        {
          name: 'Antminer S9',
          description: 'El Antminer S9 es un potente minero de Bitcoin fabricado por Bitmain.',
          image: require('../../assets/asic1.jpg').default,
        },
        {
          name: 'Otro Minero S9',
          description: 'Descripción del otro modelo S9.',
          image: require('../../assets/asic3.jpg').default,
        },
        {
          name: 'Más Minero S9',
          description: 'Descripción de otro modelo S9.',
          image: require('../../assets/asic6.jpg').default,
        },
      ],
    },
    'hydro-series': {
      products: [
        {
          name: 'Hydro Series Producto 1',
          description: 'Descripción del primer producto de Hydro Series.',
          image: require('../../assets/asic7.jpg').default,
        },
        {
          name: 'Hydro Series Producto 2',
          description: 'Descripción del segundo producto de Hydro Series.',
          image: require('../../assets/asic8.jpg').default,
        },
        {
          name: 'Hydro Series Producto 3',
          description: 'Descripción del tercer producto de Hydro Series.',
          image: require('../../assets/asic9.jpg').default,
        },
      ],
    },
  };

  const category = productDetails[itemId];

  if (!category) {
    return <div>No se encontró la categoría</div>;
  }

  return (
    <div className="contenedorB">
      {category.products.map(product => (
        <div key={product.name}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
