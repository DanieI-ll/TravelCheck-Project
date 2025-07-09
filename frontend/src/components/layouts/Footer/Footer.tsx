import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a href="https://github.com/DanieI-ll" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/daniel-bich-564649274/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <p className={styles.text}>© {new Date().getFullYear()} TravelCheck. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
