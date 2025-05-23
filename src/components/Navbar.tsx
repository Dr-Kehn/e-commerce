// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Bandage</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={`${styles.links} ${menuOpen ? styles.mobileMenu : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li className={styles.dropdown}>
          <Link to="/shop">Shop</Link>
          <span className={styles.toggle}>▼</span>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/pages">Pages</Link></li>
      </ul>
      <div className={styles.icons}>
        <Link to="/login"><FaUser /> Login / Register</Link>
        <Link to=""><FaSearch /></Link>
        <Link to="/cart">
        <div className={styles.iconWithBadge}>
          <FaShoppingCart />
          <span className={styles.count}>{cartItemCount}</span>
        </div>
        </Link>
        <div className={styles.iconWithBadge}>
          <FaHeart />
          <span className={styles.count}>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
