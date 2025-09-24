import styles from './Header.module.css'
import logo from '../../images/HomePage/logo.svg'
import user from '../../images/HomePage/user.svg'
import favourites from '../../images/HomePage/favourites.svg'
import cart from '../../images/HomePage/cart.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (  
        <div className={styles['header']}>
            <section className={styles['header-section-logo']}>
                <Link to="/" onClick={closeMenu}>
                    <img className={styles['header-logo']} src={logo} alt="Logo" />
                </Link>
            </section>

            {/* Бургер меню */}
            <div 
                className={`${styles['burger-menu']} ${isMenuOpen ? styles['burger-menu-open'] : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Основное меню */}
            <section className={`${styles['header-section-links']} ${isMenuOpen ? styles['menu-open'] : ''}`}>
                <ul>
                    <Link to='/products' onClick={closeMenu}><li>Shop</li></Link>
                    <li onClick={closeMenu}>About</li>
                    <li onClick={closeMenu}>Contact</li>
                </ul>
            </section>

            <section className={`${styles['header-section-user']} ${isMenuOpen ? styles['menu-open'] : ''}`}>
                <ul>
                    <li><img src={user} alt="Клиент" /></li>
                    <Link to={"/liked"} onClick={closeMenu}><li><img src={favourites} alt="избранное" /></li></Link>
                    <Link to="/cart" onClick={closeMenu}><li><img src={cart} alt="корзина" /></li></Link>
                </ul>
            </section>

            {isMenuOpen && <div className={styles['overlay']} onClick={closeMenu}></div>}
        </div>
    );
}

export default Header;