import Button from './evento/Button';

function Evento() {
  // function meuEvento({numero}) {
  function meuEvento() {
    console.log(`Ativando primeiro evento!`);
    // console.log(`Fui ativado ${numero}`);
  }

  function segundoEvento() {
    console.log('Ativando o segundo evento!');
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro evento!" />
      <Button event={segundoEvento} text="Segundo evento!" />
      {/* <button onClick={MeuEvento}>Ativar!</button> */}
    </div>
  );
}

export default Evento;
