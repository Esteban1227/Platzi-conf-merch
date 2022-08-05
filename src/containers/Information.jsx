import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

function Information() {
  const { state, addToBuyer } = useContext(AppContext)
  const form = useRef(null) 
  const { cart } = state
  const navigate = useNavigate()

  const handleSubmit = () => {
    const forData = new FormData(form.current)
    const buyer = {
      'name': forData.get('name'),
      'email': forData.get('email'),
      'address': forData.get('address'),
      'apto': forData.get('apto'),
      'city': forData.get('city'),
      'country': forData.get('country'),
      'state': forData.get('state'),
      'cp': forData.get('cp'),
      'phone': forData.get('phone'),
    }
    addToBuyer(buyer)
    navigate('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" required />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" required />
            <input type="text" placeholder="pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">
                Regresar
              </Link>
            </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {
          cart.map((item) => (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.name}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Information;
