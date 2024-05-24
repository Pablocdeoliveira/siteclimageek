import "./App.css";
import { useState, useEffect } from "react";
import Titulo from "./components/Titulo/Titulo";
import Card from "./components/Card/Card";

function App() {
  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];
  let [contadorEstado, setContadorEstado] = useState(0);
  let contador = 0;

  const contaClic = () => {
    console.log((contador = contador + 1));
  };

  let temperatura = 30;
  let desc = "";
  const [stateTemperatura, setStateTemperatura] = useState(30);
  const [descricao, setdescricao] = useState("");
  const[cidade, setCidade] = useState('São Paulo')

  const callApi = () => {
    console.log("Vai chamar a API temperatura");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=9d7dda8c0f3471b54505c0a37583066e`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadoTemperatura) => {
        temperatura = dadoTemperatura.main.temp;
        desc = dadoTemperatura.weather[0].description;
        console.log(temperatura);
        console.log(desc);
        setStateTemperatura(dadoTemperatura.main.temp);
        setdescricao(dadoTemperatura.weather[0].description);
      });
  };

  const dadoEntrada = (evento) =>{
    setCidade(evento.target.value)
  };


  return (
    <div className="App">
      <Titulo descricao="Clima Geek"></Titulo>

      <input type="text" placeholder="Insira o nome da cidade" onChange={dadoEntrada}></input>
      <button onClick={callApi}>Buscar</button>
      <p>{stateTemperatura}</p>
      <p>{descricao}</p>
      <p>{cidade}</p>

      {/* <button
        onClick={() => {
          setContadorEstado((contadorEstado = contadorEstado + 1));
        }}
      >
        CLIQUE AQUI
      </button> */}

      <h1>{contadorEstado}</h1>
      {diasSemana.map((dia) => {
        return <Card diaDaSemana={dia}></Card>;
      })}
    </div>
  );
}

export default App;
