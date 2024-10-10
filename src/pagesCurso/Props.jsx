import React from "react";
import SayMyName from "../components/SayMyName";
import Pessoa from "../components/Pessoa";
import Item from "../components/Item";
import Evento from "../components/Evento";

const Props = () => {
  const nome = "Maria";
  const idade = 36;
  const cargo = "Recruiter";
  const sizeFoto = 120;
  const foto =
    "https://blog.unyleya.edu.br/wp-content/uploads/2019/07/298696-conheca-os-4-principais-tipos-de-perfis-profissionais.jpg";
  return (
    <>
      <h3>
        Props <span> (SayMyName.jsx)</span>
      </h3>
      <SayMyName nome="Matheus" idade="23" cidade="RJ" />
      <SayMyName nome="João" idade="28" cidade="PR" />
      <a
        href="https://www.youtube.com/watch?v=ZLtBdpwg8tI&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=5&pp=iAQB"
        target="_blank"
      >
        https://www.youtube.com/watch?v=ZLtBdpwg8tI
      </a>
      <hr />
      <h3>
        Props dinâmica<span> (Pessoa.jsx)</span>
      </h3>
      <Pessoa
        sizeFoto={sizeFoto}
        nome={nome}
        idade={idade}
        cargo={cargo}
        foto={foto}
      />
      <a
        href="https://www.youtube.com/watch?v=hcp1LqP2OCE&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=8&pp=iAQB"
        target="_blank"
      >
        https://www.youtube.com/watch?v=hcp1LqP2OCE
      </a>
      <hr />
      <h3>
        Props Avançado <span>(Item.jsx)</span>
      </h3>
      <p>
        <i>Valida o tipo de variavel que foi definido</i>
      </p>
      <ul>
        <Item marca="Honda" ano_lancamento={1995} />
        <Item marca="Fiat" ano_lancamento={2013} />
        <Item marca="Toyota" ano_lancamento={2202} />
        {/* <Item />  CAI NA VALIDAÇÃO */}
      </ul>
      <hr />
      <h3>
        Passando eventos por props <span>(Evento.jsx)</span>
      </h3>
      <Evento />
      <a
        href="https://www.youtube.com/watch?v=obUEByaiwtY&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=11"
        target="_blank"
      >
        https://www.youtube.com/watch?v=obUEByaiwtY
      </a>
    </>
  );
};

export default Props;
