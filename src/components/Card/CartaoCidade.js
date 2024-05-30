import React from 'react';
import './CartaoCidade.css';

function CartaoCidade({ cidade, temperatura, descricao }) {
  return (
    <div className="cartao-cidade">
      <h2>{cidade}</h2>
      <p>Temperatura: {temperatura}°C</p>
      <p>Descrição: {descricao}</p>
    </div>
  );
}

export default CartaoCidade;
