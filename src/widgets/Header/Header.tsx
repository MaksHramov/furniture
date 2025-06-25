import styles from './Header.module.css'
import logo from '../../images/HomePage/logo.svg'
import user from '../../images/HomePage/user.svg'
import favourites from '../../images/HomePage/favourites.svg'
import cart from '../../images/HomePage/cart.svg'
import search from '../../images/HomePage/search.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (  
        <div className={styles['header']}>
            <section className={styles['header-section-logo']}>
                <Link to="/"><img className={styles['header-logo']} src={logo} alt="Logo" /></Link>
            </section>

            <section className={styles['header-section-links']}>
                <ul>
                    <Link to = '/products'><li>Shop</li></Link>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </section>

            <section className={styles['header-section-user']}>
                <ul>
                    <li><img src={user} alt="Клиент" /></li>
                    <li><img src={search} alt="поиск" /></li>
                    <li><img src={favourites} alt="избранное" /></li>
                    <Link to="/cart"><li><img src={cart} alt="корзина" /></li></Link>
                </ul>
            </section>
        </div>
    );
}

export default Header;