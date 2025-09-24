import { useSelector } from 'react-redux';
import banner from '../../images/CheckOutPage/banner.png';
import styles from './CheckOutPage.module.css';
import type { RootState } from '../../app/providers/store';



function CheckOutPage() {

  const items = useSelector((state: RootState) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  return (
    <>
      <img className={styles.banner} src={banner} alt="Checkout banner" />

      <div className={styles.container}>
        <section className={styles.left}>
          <h1 className={styles.title}>Billing details</h1>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstname">First Name</label>
                <input id="firstname" required type="text" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastname">Last Name</label>
                <input id="lastname" required type="text" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="companyname">Company Name (Optional)</label>
              <input id="companyname" type="text" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="country">Country / Region</label>
              <select id="country">
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="Russia">Russia</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address">Street address</label>
              <input id="address" required type="text" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="city">Town / City</label>
              <input id="city" required type="text" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="province">Province</label>
              <select id="province">
                <option value="Western Province">Western Province</option>
                <option value="Central Province">Central Province</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="zipcode">ZIP code</label>
              <input id="zipcode" required type="text" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" required type="tel" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input id="email" required type="email" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="info">Additional information</label>
              <textarea id="info" placeholder="Additional information" />
            </div>
          </form>
        </section>


        <section className={styles.right}>
          <div className={styles.summaryHeader}>
            <h2>Product</h2>
            <h2>Subtotal</h2>
          </div>

          <div className={styles.summaryList}>
            {items.map((el) => (
              <div className={styles.summaryRow} key={el.id}>
                <p>{el.title} × {el.quantity}</p>
                <p>{(el.price * el.quantity).toFixed(2)} ₽</p>
              </div>
            ))}
          </div>


          <div className={styles.summaryRow}>
            <strong>Subtotal</strong>
            <strong>{total}</strong>
          </div>

          <div className={styles.summaryRowTotal}>
            <strong>Total</strong>
            <strong className={styles.totalPrice}>{total}</strong>
          </div>

          <form className={styles.payment}>
            <label>
              <input type="radio" name="payment" defaultChecked />
              Direct Bank Transfer
            </label>
            <p className={styles.paymentInfo}>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <label>
              <input type="radio" name="payment" />
              Cash On Delivery
            </label>
          </form>

          <p className={styles.privacy}>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="#">privacy policy</a>.
          </p>

          <button className={styles.placeOrder}>Place order</button>
        </section>
      </div>
    </>
  );
}

export default CheckOutPage;
