import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

function Checkout() {

  const { state, removeFromCart } = useContext(AppContext)
  const { cart } = state
  const handleRemove = (product) => {
      removeFromCart(product)
  }
  const handleSumTotal = () => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue.price
      const sum = cart.reduce(reducer, 0)
      return sum
  }
    
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? "Lista de Pedidos" : "Sin Pedidos"}</h3>
        {
          cart.map((item => (
            <div className="Checkout-item" key={item.id}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
                <button type="button" onClick={() => handleRemove(item)}>
                  <AiFillDelete />
                </button>
              </div>
            </div>
          )))
        }
      </div>
      {
        cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio todal: ${handleSumTotal()}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar Pedido</button>
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default Checkout;
