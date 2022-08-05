import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

function Payment() {

  const navigate = useNavigate()
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, brayer } = state
  const paypalOptions = {
    clientId: 'yh7k4fky4w5tcgrb$8476a0cfb48894604df35105df70b453',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }
  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED'){
      const newOrder = {
        brayer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success/')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map((item) => (
            <div className="Payment-item" key={item.name}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div className="Payment-sidebar" />
    </div>
  );
}

export default Payment;
