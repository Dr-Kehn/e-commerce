// src/components/CategoryGrid.tsx
import CategoryCard from './CategoryCard';
import styles from './CategoryGrid.module.css';

const categories = [
  { name: 'Kitchenware', imageUrl: '/images/categories/kitchenware.jpg' },
  { name: 'Home Decor', imageUrl: '/images/categories/decor.png' },
  { name: 'Furniture', imageUrl: '/images/categories/furniture.png' },
  { name: 'Tableware', imageUrl: '/images/categories/tableware.png' },
];

const CategoryGrid = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <CategoryCard key={cat.name} name={cat.name} imageUrl={cat.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
