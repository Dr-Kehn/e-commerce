// src/components/ProductCard.tsx
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addToCart } from '../redux/cartSlice';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  id: number;
}

const ProductCard = ({ title, thumbnail, price, discountPercentage, id }: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        thumbnail,
        price,
        quantity: 1,
      })
    );
  };

  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        ${price} <span className={styles.discount}>-{discountPercentage}%</span>
      </p>
      <button onClick={handleAddToCart} className={styles.addButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
