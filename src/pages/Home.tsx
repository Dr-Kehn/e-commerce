// src/pages/Home.tsx
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import BestServices from '../components/BestServices';
import FeaturedPosts from '../components/FeaturedPosts';

const Home = () => {
  return (
    <div style={{ paddingTop: '115px' }}>
      <CategoryGrid />
      <ProductGrid />
      <BestServices />
      <FeaturedPosts />
    </div>
  );
};

export default Home;
