import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.socials}>
          <a href="https://github.com/kullanici-adin" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kullanici-adin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <p className={styles.text}>© {new Date().getFullYear()} Travel Guide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
