import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/providers/store";
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from "../../app/providers/cartSlice";
import styles from './CartPage.module.css'
import deleteImg from '../../images/CartPage/delete.svg'
import banner from '../../images/CartPage/banner.png'
import { Link } from "react-router-dom";

function CartPage() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <img className={styles['cart-page-banner']} src={banner} alt="Cart banner" />
      {items.length === 0 ? (
        <div className={styles['empty-cart-container']}>
          <h1 className={styles["cart-page-title"]}>Cart is clear😭</h1>
          <Link to="/products" className={styles['continue-shopping']}>
            <button className={styles['continue-shopping-btn']}>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div className={styles['cart-page-container']}>
          <div className={styles['cart-list']}>
            <div className={styles['cart-list-header']}>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
              <span>Action</span>
            </div>
            {items.map(item => (
              <div className={styles['cart-list-element']} key={item.id}>
                <div className={styles['cart-list-element-product']}>
                  <img className={styles['cart-list-element-img']} src={item.img} alt={item.title} />
                  <h2 className={styles['cart-list-element-title']}>{item.title}</h2>
                </div>
                <p className={styles['cart-list-element-price']}>{item.price} ₽</p>
                <div className={styles['cart-list-quantity-container']}>
                  <button className={styles['cart-list-quantity-button']} onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                  <span className={styles['cart-list-quantity']}>{item.quantity}</span>
                  <button className={styles['cart-list-quantity-button']} onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
                <p className={styles['cart-list-element-subtotal']}>{(item.price * item.quantity).toFixed(2)} ₽</p>
                <img src={deleteImg} className={styles['cart-list-element-button']} onClick={() => dispatch(removeFromCart(item.id))} alt="Delete" />
              </div>
            ))}
          </div>
          
          <div className={styles['cart-page-info']}>
            <h2 className={styles['cart-totals-title']}>Cart Totals</h2>
            <div className={styles['cart-page-info-container']}>
              <div className={styles['summary-row']}>
                <span>Subtotal:</span>
                <span>{total} ₽</span>
              </div>
              <div className={styles['summary-row']}>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className={styles['summary-row']}>
                <span>Total:</span>
                <span className={styles['cart-page-info-container-price']}>{total} ₽</span>
              </div>
            </div>
            <Link to='/checkout' className={styles['checkout-link']}>
              <button className={styles['cart-list-check']}>Check Out</button>
            </Link>
            <button className={styles['cart-list-clear']} onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;