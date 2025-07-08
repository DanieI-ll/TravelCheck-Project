import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>We’d love to hear from you. Reach out via:</p>

        <ul className={styles.contactList}>
          <li>
            <strong>Email:</strong> support@travelcheck.com
          </li>
          <li>
            <strong>Phone:</strong> +49 123 456 789
          </li>
          <li>
            <strong>Address:</strong> Example Street 1, Berlin, Germany
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
