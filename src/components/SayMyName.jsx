import React from 'react';

const SayMyName = ({ nome, idade, cidade }) => {
  return (
    <>
      <dl>
        <dd>
          Olá <strong>{nome}</strong>, <strong>{idade}</strong>, do{' '}
          <strong>{cidade}</strong> seja bem vindo!
        </dd>
      </dl>
    </>
  );
};

export default SayMyName;
