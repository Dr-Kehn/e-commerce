// src/components/CTASection.tsx
import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.overlay}>
        <p className={styles.tagline}>Designing Better Experience</p>
        <h2 className={styles.heading}>Problems trying to resolve the conflict between</h2>
        <p className={styles.description}>
          Problems trying to resolve the conflict between the two major realms of Classical physics:
        </p>
        <h4 className={styles.price}>$16.48</h4>
        <button className={styles.ctaButton}>ADD YOUR CALL TO ACTION</button>
      </div>
    </section>
  );
};

export default CTASection;
