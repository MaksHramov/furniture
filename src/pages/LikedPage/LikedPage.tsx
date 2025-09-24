import banner from '../../images/LikedPage/banner.png'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/providers/store";
import { removeFromLiked } from '../../app/providers/likedSlice';
import { addToCart } from '../../app/providers/cartSlice';
import CardLiked from '../../widgets/CardLiked/CardLiked';
import styles from './LikedPage.module.css'

function LikedPage() {

    const items = useSelector((state : RootState) => state.liked.items)
    const dispatch = useDispatch();
    return ( 
        <div className={styles['liked-page']}>
            <img className={styles['banner']} src={banner} alt="" />
            {items.length === 0 ? (<h1 className={styles['text-clear']}>Favourites is clear😭</h1>) : (
                <div className={styles["card-container"]}>
                {items.map((el) => (
                    <CardLiked
                        key={el.id}
                        id={el.id}
                        img={el.img}
                        title={el.title}
                        text={el.text}
                        price={el.price}
                        onAddToCart={() => dispatch(addToCart(el))}
                        unLiked={() => dispatch(removeFromLiked(el.id))} quantity={0}                    />
                ))}
            </div>
            )}

        </div>
     );
}

export default LikedPage;