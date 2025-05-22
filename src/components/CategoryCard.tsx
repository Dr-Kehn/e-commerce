// src/components/CategoryCard.tsx
import styles from './CategoryGrid.module.css';

type CategoryCardProps = {
  name: string;
  imageUrl: string;
  items: number;
  subtext: string;
  area: string;
};

const CategoryCard = ({ name, imageUrl, items, subtext, area }: CategoryCardProps) => {
  return (
    <div className={`${styles.card} ${styles[area]}`}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.textOverlay}>
        <p className={styles.itemsCount}>{items} items</p>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.subtext}>{subtext}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
