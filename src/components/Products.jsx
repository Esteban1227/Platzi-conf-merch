import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

function Products() {
  const { state } = useContext(AppContext);
  const { products } = state;
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
