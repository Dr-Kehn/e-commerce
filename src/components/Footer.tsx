// src/components/Footer.tsx
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoAndSocials}>
          <h2 className={styles.logo}>Bandage</h2>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4>Company Info</h4>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className={styles.column}>
            <h4>Legal</h4>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className={styles.column}>
            <h4>Features</h4>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div className={styles.column}>
            <h4>Resources</h4>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
          <div className={styles.column}>
            <h4>Get In Touch</h4>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
            <p className={styles.helperText}>Lorem imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
