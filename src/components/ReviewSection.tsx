// src/components/ReviewSection.tsx
import styles from './ReviewSection.module.css';
import { FaStar } from 'react-icons/fa';

const ReviewSection = () => {
  const starCount = 5;
  const filledStars = 4;

  return (
    <section className={styles.wrapper}>
      <div className={styles.testimonial}>
        <h3>What they say about us</h3>
        <img src="/images/review/main-reviewer.png" alt="Reviewer" className={styles.reviewerImage} />
        <div className={styles.stars}>
          {[...Array(starCount)].map((_, index) => (
            <FaStar key={index} color={index < filledStars ? '#FFD700' : '#ddd'} />
          ))}
        </div>
        <p className={styles.reviewText}>
          Slate helps you see how many more days you need to work to reach your financial goal.
        </p>
        <p className={styles.reviewerName}>Regina Miles</p>
        <p className={styles.reviewerRole}>Designer</p>
      </div>

      <div className={styles.imageGrid}>
        {[1, 2, 3].map((col) =>
          [1, 2, 3].map((row) => (
            <img
              key={`c${col}r${row}`}
              src={`/images/review/c${col}r${row}.png`}
              alt={`c${col}r${row}`}
              className={styles.gridImage}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
