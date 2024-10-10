import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="/props">Props</Link>
      </li>
      <li className={styles.item}>
        <Link to="/useStates">useStates</Link>
      </li>
      <li className={styles.item}>
        <Link to="/empresa">Empresa</Link>
      </li>
      <li className={styles.item}>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
  );
};

export default NavBar;
