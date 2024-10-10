import { useState } from 'react';

const Form = () => {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${name} cadastrado com a senha ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="button" value="Cadastrar" onClick={cadastrarUsuario} />
        </div>
        {name && <p>Olá {name}!</p>}
      </form>
    </div>
  );
};

export default Form;
