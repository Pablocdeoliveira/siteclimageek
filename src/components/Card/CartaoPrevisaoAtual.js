// components/Card/CartaoPrevisaoAtual.js
import React from 'react';
import './CartaoPrevisaoAtual.css';

const CartaoPrevisaoAtual = ({ cidade, temperatura, descricao }) => {
  return (
    <div className="cartao-previsao-atual">
      <h2>{cidade}</h2>
      <p>{temperatura}°C</p>
      <p>{descricao}</p>
    </div>
  );
};

export default CartaoPrevisaoAtual;
