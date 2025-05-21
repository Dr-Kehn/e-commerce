import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from './TopNavbar.module.css';

const TopNavbar = () => {
  const cartItemCount = useSelector(
    (state: RootState) =>
      state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">ShopLogo</Link>
      </div>

      <nav className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/cart" className={styles.cartLink}>
          🛒 Cart
          {cartItemCount > 0 && (
            <span className={styles.cartCount}>{cartItemCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default TopNavbar;
