import Carro from "../Carro";
import {Botao, GaragemContainer, Estacionamento} 
from './Style';
import styled from "styled-components";

function Garagem(props) {

  return (

    <div>
      <h1>Garagem de {props.nomeGaragem}</h1>

      {/* Essa de lidar com props + função eu não dei conta. */}
      <button onClick= {()=> props. apresentaGaragem(props.nomeGaragem)}> Clique para entrar na Garagem </button>

        
      <Carro carro={props.carro} />
      <Carro carro={props.carro2}/>
   
     
    </div>
  );
}

export default Garagem;
