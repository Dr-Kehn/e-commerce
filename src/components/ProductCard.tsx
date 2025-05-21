// src/components/ProductCard.tsx
import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
}

const ProductCard = ({ title, thumbnail, price, discountPercentage }: ProductCardProps) => {
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);

  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.price}>
          <span className={styles.original}>${price}</span> <span className={styles.discount}>${discountedPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
