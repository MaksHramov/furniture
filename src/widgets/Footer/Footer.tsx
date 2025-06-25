import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <div className={styles['footer']}>
            <div className={styles['footer-container']}>
                <section className={styles['footer-container-element']}>
                    <h2>Furio.</h2>
                    <p className={styles['footer-grey']}>400 University Drive Suite 200 Coral<br/> 
                        Gables,<br/> 
                        FL 33134 USA</p>
                </section>
                <section className={styles['footer-container-element']}>
                    <h3>Links</h3>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/products"><p>Shop</p></Link>
                    <p>About</p>
                    <p>Contact</p>
                </section>
                <section className={styles['footer-container-element']}>
                    <h3>Help</h3>
                    <p>Payment Options</p>
                    <p>Returns</p>
                    <p>Privacy Policies</p>
                </section>
                <section className={styles['footer-container-element']}>
                    <h3>Newsletter</h3>
                    <input type="text" placeholder="Enter Your Email Address"/>
                    <button>SUBSCRIBE</button>
                </section>
            </div>
            <div className={styles['footer-rights']}>
                <p>2025 furino. All rights reverved</p>
            </div>
        </div>
     );
}

export default Footer;