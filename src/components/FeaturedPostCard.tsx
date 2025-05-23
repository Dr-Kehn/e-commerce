// src/components/FeaturedPosts/FeaturedPostCard.tsx
import { FaClock, FaChartBar, FaChevronRight } from 'react-icons/fa';
import styles from './FeaturedPosts.module.css';

type Props = {
  image: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
  comments: number;
};

const FeaturedPostCard = ({ image, tags, title, description, date, comments }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.badge}>NEW</span>
      </div>

      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <span
            key={i}
            className={
              tag === 'Google' ? styles.googleTag : styles.grayTag
            }
          >
            {tag}
          </span>
        ))}
      </div>

      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <FaClock className={styles.clockIcon} /> {date}
        </span>
        <span className={styles.metaItem}>
          <FaChartBar className={styles.chartIcon} /> {comments} comments
        </span>
      </div>

      <button className={styles.learnMore}>
       <span> Learn More </span> <FaChevronRight className={styles.icon} />
      </button>
    </div>
  );
};

export default FeaturedPostCard;
