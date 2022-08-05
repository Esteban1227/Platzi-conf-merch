import React, { useContext } from 'react';
import ChartMap  from '../components/Map'
import AppContext from '../context/AppContext';
import useAddress from '../hooks/useAddress';
import '../styles/components/Success.css';


function Success() {
  const { state } = useContext(AppContext)
  const { buyer } = state
  console.log(buyer)
  const location =  useAddress(buyer[0].address,buyer[0].city,)
  console.log(location ,"location")

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}Gracias por tu compra</h2>
        <span>Tu Pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          <ChartMap data={location} />
        </div>
      </div>
    </div>
  );
}

export default Success;
