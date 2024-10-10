import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.item}>
          <FaFacebook />
        </li>
        <li className={styles.item}>
          <FaInstagram />
        </li>
        <li className={styles.item}>
          <FaLinkedin />
        </li>
      </ul>
      <p>Footer</p>
    </footer>
  );
};

export default Footer;
