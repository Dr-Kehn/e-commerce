// src/components/ProductGrid.tsx
import { useState } from 'react';
import { useGetProductsQuery } from '../features/products/productsApi';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';
import { Product } from '../types/product';


const ProductGrid = () => {
  const [limit, setLimit] = useState(6);
  const { data, isLoading, isFetching } = useGetProductsQuery({ limit, skip: 0 });

  const handleLoadMore = () => {
    setLimit((prev) => prev + 6);
  };

  return (
    <section className={styles.wrapper}>
      <h2>Featured Products</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {data?.products.map((product: Product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>
      )}
      {!isFetching && (
        <button className={styles.loadMore} onClick={handleLoadMore}>
          Load More Products
        </button>
      )}
    </section>
  );
};

export default ProductGrid;
