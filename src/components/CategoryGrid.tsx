// src/components/CategoryGrid.tsx
import CategoryCard from './CategoryCard';
import styles from './CategoryGrid.module.css';

const categories = [
  {
    name: 'Kitchenware',
    items: 5,
    subtext: 'Read More',
    imageUrl: '/images/categories/kitchenware.png',
    area: 'kitchenware',
  },
  {
    name: 'Home Decor',
    items: 8,
    subtext: 'Read More',
    imageUrl: '/images/categories/decor.png',
    area: 'decor',
  },
  {
    name: 'Furniture',
    items: 4,
    subtext: 'Read More',
    imageUrl: '/images/categories/furniture.png',
    area: 'furniture',
  },
  {
    name: 'Tableware',
    items: 6,
    subtext: 'Read More',
    imageUrl: '/images/categories/tableware.png',
    area: 'tableware',
  },
];

const CategoryGrid = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            name={cat.name}
            imageUrl={cat.imageUrl}
            items={cat.items}
            subtext={cat.subtext}
            area={cat.area}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
