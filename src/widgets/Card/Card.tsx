import type { Props } from "./Card.props";
import styles from './Card.module.css';



function Card({ img, title, text, price, onAddToCart, onLiked }: Props) {
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
            <span onClick={onLiked}>🤍 Like</span>
          </div>
        </div>
      </div>
      <h2>{title}</h2>
      <p className={styles['card-text']}>{text.slice(0,90) + '...'}</p>
      <p className={styles['card-price']}>{price} ₽</p>
    </div>
  );
}

export default Card;
