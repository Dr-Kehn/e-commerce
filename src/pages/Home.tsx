// src/pages/Home.tsx
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  return (
    <div style={{ paddingTop: '115px' }}>
      <CategoryGrid />
      <ProductGrid />
    </div>
  );
};

export default Home;
