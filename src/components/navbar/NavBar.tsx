import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>| Task Manager |</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.link}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;