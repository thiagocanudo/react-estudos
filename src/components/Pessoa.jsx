// PROPS
import styles from "./Pessoa.module.css";

const Pessoa = ({ foto, nome, idade, cargo, sizeFoto }) => {
  return (
    <section className={styles.secao}>
      <div className="avatar">
        <img width={sizeFoto} src={foto} alt={nome} />
      </div>
      <div className={styles.dados}>
        <p>
          Nome: <strong>{nome}</strong>
        </p>
        <p>
          Idade: <strong>{idade}</strong>
        </p>
        <p>
          Cargo: <strong>{cargo}</strong>
        </p>
      </div>
    </section>
  );
};

export default Pessoa;
