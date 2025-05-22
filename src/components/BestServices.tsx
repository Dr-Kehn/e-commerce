// src/components/BestServices.tsx
import styles from './BestServices.module.css';
import icon1 from '../assets/icons/easy-wins.svg';
import icon2 from '../assets/icons/concrete.svg';
import icon3 from '../assets/icons/hack-growth.svg';

const services = [
  {
    icon: icon1,
    title: 'Easy Wins',
    description: 'Get your best looking smile now!',
  },
  {
    icon: icon2,
    title: 'Concrete',
    description: 'Defalcate is more focused in helping you discover your most beautiful smile',
  },
  {
    icon: icon3,
    title: 'Hack Growth',
    description: 'Overcame any hurdle or any other problem',
  },
];

const BestServices = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.subtitle}>Featured Products</p>
      <h2 className={styles.title}>THE BEST SERVICES</h2>
      <p className={styles.description}>
        Problems trying to resolve the conflict between
      </p>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.icon} alt={service.title} className={styles.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestServices;
