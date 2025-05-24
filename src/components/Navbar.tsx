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

      <div className={styles.mobileIcons}>
        <Link to=""><FaSearch /></Link>
        <Link to="/cart">
      <div className={styles.iconWithBadge}>
      <FaShoppingCart />
      <span className={styles.count}>{cartItemCount}</span>
      </div>
        </Link>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>


      <ul className={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li className={styles.dropdown}>
          <Link to="/">Shop</Link>
          <span className={styles.toggle}>▼</span>
        </li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/">Pages</Link></li>
      </ul>

      {menuOpen && (
        <ul className={styles.mobileMenu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/">Product</Link></li>
          <li><Link to="/">Pricing</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      )}

      <div className={styles.icons}>
        <Link to="/" className={styles.login}><FaUser /> Login / Register</Link>

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
