// src/components/CategoryCard.tsx
import styles from './CategoryGrid.module.css';

type CategoryCardProps = {
  name: string;
  imageUrl: string;
  onClick?: () => void;
};

const CategoryCard = ({ name, imageUrl, onClick }: CategoryCardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.label}>{name}</div>
    </div>
  );
};

export default CategoryCard;
