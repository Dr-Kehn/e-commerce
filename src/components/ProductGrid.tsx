import { useState, useEffect } from 'react';
import { useGetProductsQuery } from '../features/products/productsApi';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';
import { Product } from '../types/product';

const ProductGrid = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(8);

  // Determine screen size only in the browser
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setLimit(mobile ? 4 : 8);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { data, isLoading, isFetching } = useGetProductsQuery({ limit, skip: 0 });

  const visibleProducts: Product[] = data?.products ?? [];

  const handleLoadMore = () => {
    setLimit((prev) => prev + (isMobile ? 4 : 8));
  };

  return (
    <section className={styles.wrapper}>
      <h3>Featured Products</h3>
      <h2>BESTSELLER PRODUCTS</h2>
      <h4>Problems trying to resolve the conflict between</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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
