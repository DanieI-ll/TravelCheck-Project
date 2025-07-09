import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contacts</h1>
        <p className={styles.subtitle}>We’d love to hear from you. Reach out via:</p>

        <ul className={styles.contactList}>
          <li>
            <strong>Email:</strong> danieljxzt@gmail.com
          </li>
        </ul>
        <div className={styles.socials}>
          <a href="https://github.com/DanieI-ll" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/daniel-bich-564649274/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
