import React from 'react';
import './CartaoPrevisao.css';

function CartaoPrevisao({ dia, temperatura, descricao }) {
  return (
    <div className="cartao-previsao">
      <h3>{dia}</h3>
      <p>Temperatura: {temperatura}°C</p>
      <p>Descrição: {descricao}</p>
    </div>
  );
}

export default CartaoPrevisao;
