// src/components/FeaturedPosts/FeaturedPosts.tsx
import FeaturedPostCard from './FeaturedPostCard';
import styles from './FeaturedPosts.module.css';

const posts = [
  {
    id: 1,
    image: '/images/posts/post1.png',
    tags: ['Google', 'Trending', 'New'],
    title: "Loudest a la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2022',
    comments: 10,
  },
  {
    id: 2,
    image: '/images/posts/post2.png',
    tags: ['Google', 'Trending', 'New'],
    title: "Loudest a la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2022',
    comments: 10,
  },
  {
    id: 3,
    image: '/images/posts/post3.png',
    tags: ['Google', 'Trending', 'New'],
    title: "Loudest a la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2022',
    comments: 10,
  },
];

const FeaturedPosts = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.subtitle}>Practice Advice</p>
      <h2 className={styles.heading}>Featured Posts</h2>
      <div className={styles.grid}>
        {posts.map((post) => (
          <FeaturedPostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
