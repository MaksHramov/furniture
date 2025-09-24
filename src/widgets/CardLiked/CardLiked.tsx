import type { Props } from "../Card/Card.props";
import styles from '../Card/Card.module.css';

function CardLiked({ img, title, text, price, onAddToCart, unLiked} : Props) {
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
              <span onClick={unLiked}>🗑️ UnLike</span>
            </div>
          </div>
        </div>
        <h2>{title}</h2>
        <p className={styles['card-text']}>{text}</p>
        <p className={styles['card-price']}>{price} ₽</p>
      </div>
    );
}

export default CardLiked;