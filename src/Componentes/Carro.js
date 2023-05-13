function Carro(props) {

  return (

    <div>
      <h2>{props.carro.modelo}</h2>
      <ul>
  {/* no slide parece que era pra usar propType, não foi usado em aula e não sei fazer tbm. */}
        <li>{props.carro.ano}</li>
        <li>{props.carro.flex}</li>
        <li>{props.carro.cor}</li>
      </ul>
    </div>
    
  );
}


export default Carro;
