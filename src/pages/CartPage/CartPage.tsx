// src/pages/CartPage.tsx
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/providers/store";
import { clearCart, removeFromCart } from "../../app/providers/cartSlice";
import styles from './CartPage.module.css'
import deleteImg from '../../images/CartPage/delete.svg'
import banner from '../../images/CartPage/banner.png'

function CartPage() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <img className={styles['cart-page-banner']} src={banner} alt="" />
      {items.length === 0 ? (
        <h1>Cart is clear</h1>
      ) : (
        <div className={styles['cart-page-container']}>
            <div className={styles['cart-list']}>
                {items.map(item => (
                <div className={styles['cart-list-element']} key={item.id}>
                    <img className={styles['cart-list-element-img']} src={item.img} alt={item.title} width={80} />
                    <h2 className={styles['cart-list-element-title']}>{item.title}</h2> 
                    <p className={styles['cart-list-element-price']}>{item.price} ₽</p> 
                    <img src={deleteImg} className={styles['cart-list-element-button']} onClick={() => dispatch(removeFromCart(item.id))}/>
                </div>
                ))}
            </div>
            <div className={styles['cart-page-info']}>
                <h2>Cart Totals</h2>
                <div className={styles['cart-page-info-container']}>
                    <h3>total:</h3>
                    <h3 className={styles['cart-page-info-container-price']}>{total} ₽</h3>
                </div>
                <button>Check Out</button>
                <button onClick={() => dispatch(clearCart())}>Clear</button>
            </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
