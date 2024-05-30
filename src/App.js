import "./App.css";
import { useState } from "react";
import Titulo from "./components/Titulo/Titulo";
import CartaoPrevisao from "./components/Card/CartaoPrevisao";
import CartaoPrevisaoAtual from "./components/Card/CartaoPrevisaoAtual";

function App() {
  const [previsoes, setPrevisoes] = useState([]);
  const [previsaoAtual, setPrevisaoAtual] = useState(null);
  const [cidade, setCidade] = useState('São Paulo');

  const chamarApi = () => {
    console.log("Vai chamar a API de previsão");

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`
    )
      .then((resposta) => resposta.json())
      .then((dadosPrevisao) => {
        const previsoesDiarias = dadosPrevisao.list.filter((_, index) => index % 8 === 0).slice(0, 5);
        setPrevisoes(previsoesDiarias);
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`
    )
      .then((resposta) => resposta.json())
      .then((dadosAtuais) => {
        setPrevisaoAtual(dadosAtuais);
      });
  };

  const handleCidadeChange = (evento) => {
    setCidade(evento.target.value);
  };

  return (
    <div className="App">
      <Titulo descricao="Clima Geek"></Titulo>

      <input type="text" placeholder="Insira o nome da cidade" onChange={handleCidadeChange}></input>
      <button onClick={chamarApi}>Buscar</button>

      {previsaoAtual && (
        <CartaoPrevisaoAtual
          cidade={cidade}
          temperatura={previsaoAtual.main.temp}
          descricao={previsaoAtual.weather[0].description}
        />
      )}

      <div className="previsoes-container">
        {previsoes.map((previsao, index) => (
          <CartaoPrevisao
            key={index}
            dia={new Date(previsao.dt_txt).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
            temperatura={previsao.main.temp}
            descricao={previsao.weather[0].description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

