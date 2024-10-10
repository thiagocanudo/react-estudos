import React, { useState } from 'react';

const Empresa = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();

  function increment() {
    // setCount(count + 1);
    setCount((prevState) => prevState + 1);
  }

  function getName(e) {
    e.preventDefault();

    if (!name) {
      alert('Campo nome não preenchido');
    } else if (count == 0) {
      alert('Campo Count não preenchido ');
    } else {
      alert(`bem vindo ${name}, ${count}º usuário`);
    }
  }

  function clearName(e) {
    e.preventDefault();
    setName('');
    document.querySelector('#Name').value = '';
  }

  return (
    <div>
      <h1>Empresa</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>incrementar {count}</button>
      <hr />
      <form>
        <p>
          <input
            type="text"
            id="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <button onClick={getName}>Nome</button>
        <button onClick={clearName}>Limpar nome</button>
        {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
        {name && <p style={{ backgroundColor: 'lime' }}>{name}</p>}
      </form>
    </div>
  );
};

export default Empresa;
