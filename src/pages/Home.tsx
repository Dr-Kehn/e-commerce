// src/pages/Home.tsx
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import BestServices from '../components/BestServices';

const Home = () => {
  return (
    <div style={{ paddingTop: '115px' }}>
      <CategoryGrid />
      <ProductGrid />
      <BestServices />
    </div>
  );
};

export default Home;
