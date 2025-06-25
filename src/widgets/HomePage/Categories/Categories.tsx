import styles from './Categories.module.css'
import dining from '../../../images/HomePage/dining.png'
import living from '../../../images/HomePage/living.png'
import bedroom from '../../../images/HomePage/bedroom.png'
import { Link } from 'react-router-dom'

function Categories() {
    return (  
        <div className={styles['categories']}>
            <h2 className={styles['categories-title']}>Browse The Range</h2>
            <p className={styles['categories-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles['categories-container']}>
                <div className={styles['categories-element']}>
                <Link to="/products"><img className={styles['categories-img']} src={dining} alt="" /></Link>
                    <h3>Dining</h3>
                </div>
                <div className={styles['categories-element']}>
                <Link to="/products"><img src={living} alt="" /></Link>
                    <h3>Living</h3>
                </div>
                <div className={styles['categories-elememt']}>
                <Link to="/products"><img src={bedroom} alt="" /></Link>
                    <h3>Bedroom</h3>
                </div>
            </div>
        </div>
    );
}

export default Categories;