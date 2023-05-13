
import Garagem from "./Componentes/Garagem/Garagem";
import "./styles.css";

export default function App() {

  function apresentaGaragem (nome) {
    alert (`Boas vindas à garagem de ${nome} `)
  }

  const carroBia = {
    modelo: "HB20",
    ano: 2020,
    flex: "sim",
    cor: "prata"
  }

  const carroHeitor = {
    modelo: "Jeep",
    ano: 2010,
    flex: "não",
    cor: "azul"
  }

  return (
    <div>
      <Garagem 
        nomeGaragem = "Rossati"
        apresentaGaragem= {apresentaGaragem}
        carro={carroBia}
        carro2={carroHeitor}
      />
    </div>
  );
}
