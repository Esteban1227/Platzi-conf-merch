import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

function Product({ product }) {
  const { addToCart, removeFromCart } = useContext(AppContext);
  const [inCart, setInCart] = useState(false);
  
  // eslint-disable-next-line no-shadow
  const handleAddToCart = product => {
    // eslint-disable-next-line no-unused-expressions
    inCart ? removeFromCart(product) : addToCart(product);
    setInCart(!inCart)
  }
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={() => handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
}

export default Product;
