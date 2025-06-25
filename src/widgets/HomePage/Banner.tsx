import styles from '../../pages/HomePage/HomePage.module.css'
import { Link } from 'react-router-dom';


function Banner() {
    return ( 
        <div className={styles['banner']}>
            <div className={styles['banner-section']}>
                <h1 className={styles['banner-title']}>Discover Our New Collection</h1>
                <p className={styles['banner-tetxt']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero, sint debitis repudiandae facere molestiae inventore maiores ipsum odit recusandae quisquam molestias dolorum, maxime a suscipit accusantium impedit, asperiores animi.</p>
                <Link to="/products"><button className={styles['banner-button']}>BUY NOW</button></Link>
            </div>
        </div>
     );
}

export default Banner;