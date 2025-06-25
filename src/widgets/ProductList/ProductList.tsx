import { useEffect, useState } from "react";
import type { CardProps } from "../Card/Card.props";
import Card from "../Card/Card";
import styles from './ProductList.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/providers/cartSlice";

function ProductList() {

    const [products, setProducts] = useState<CardProps[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log('Error', err))
    }, [])

    return ( 
        <div className={styles['product-list']}>
            {products.map (el => (
                <Card
                key={el.id}
                id={el.id}
                img={el.img}
                title={el.title}
                text={el.text}
                price={el.price}
                onAddToCart = {() => dispatch(addToCart(el))}
                />
            ))}
        </div>
     );
}

export default ProductList;