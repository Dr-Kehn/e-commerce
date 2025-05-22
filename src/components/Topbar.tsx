// src/components/Topbar.tsx
import styles from './Topbar.module.css';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <FaPhoneAlt />
        <span>(225) 555-0118</span>
        <FaEnvelope />
        <span>michelle.rivera@example.com</span>
      </div>
      <div className={styles.center}>
        Follow Us and get a chance to win 80% off
      </div>
      <div className={styles.right}>
        <span>Follow Us:</span>
        <FaInstagram />
        <FaYoutube />
        <FaFacebookF />
        <FaTwitter />
      </div>
    </div>
  );
};

export default Topbar;
