import type { CardProps } from "./Card.props";
import styles from './Card.module.css';

interface Props extends CardProps {
  onAddToCart: () => void;
}

function Card({ img, title, text, price, onAddToCart }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <button className={styles.addToCart} onClick={onAddToCart}>
            Add to cart
          </button>
          <div className={styles.actions}>
            <span>🔗 Share</span>
            <span>🤍 Like</span>
          </div>
        </div>
      </div>
      <h2>{title}</h2>
      <p className={styles['card-text']}>{text}</p>
      <p className={styles['card-price']}>{price} ₽</p>
    </div>
  );
}

export default Card;
