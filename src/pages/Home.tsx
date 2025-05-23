// src/pages/Home.tsx
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import BestServices from '../components/BestServices';
import FeaturedPosts from '../components/FeaturedPosts';
import ReviewSection from '../components/ReviewSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div style={{ paddingTop: '115px' }}>
      <CategoryGrid />
      <ProductGrid />
      <BestServices />
      <FeaturedPosts />
      <ReviewSection />
      <CTASection />
    </div>
  );
};

export default Home;
