import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>Logo</div>

        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          ☰
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? styles.active : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cities" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? styles.active : '')}>
              Browse Cities
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? styles.active : '')}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
