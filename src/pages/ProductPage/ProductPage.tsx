import shopBanner from '../../images/ShopPage/shopBanner.png'
import ProductList from '../../widgets/ProductList/ProductList';
import styles from './ProductPage.module.css'

function ProductPage() {
    return (
        <div className={styles['product-page']}>
            <img src={shopBanner} alt="Banner" />
            <ProductList/>
        </div>
    );
}

export default ProductPage;
