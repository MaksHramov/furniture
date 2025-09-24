import Card from "../Card/Card";
import styles from './ProductList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/providers/cartSlice";
import { addToLiked } from "../../app/providers/likedSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../shared/api/api";
import { loadItems } from "../../app/providers/productsSlice";
import Search from "../Search/Search";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products?.items ?? []);
  const [search, setSearch] = useState(""); // состояние поиска

  useEffect(() => {
    if (products.length === 0) {
      axios.get(`${API_URL}/v1/products?limit=20`)
        .then(res => {
          dispatch(loadItems(res.data.data));  
        })
        .catch(err => console.error("Ошибка API:", err));
    }
  }, [dispatch, products.length]);

  const filteredProducts = products.filter((el: any) =>
    el.name.toLowerCase().includes(search.toLowerCase()) ||
    el.description.toLowerCase().includes(search.toLowerCase())
  );

  return ( 
    <>
      <Search value={search} onChange={setSearch} />

      <div className={styles['product-list']}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((el: any) => (
            <Card
              key={el.id}
              id={el.id}
              img={el.image_path}
              title={el.name}
              text={el.description}
              price={el.price}
              quantity={0}
              onAddToCart={() => {dispatch(addToCart({
                ...el,
                img: el.image_path,
                title: el.name
              }))
              }}
              onLiked={() => dispatch(addToLiked({
                ...el,
                img: el.image_path,
                title: el.name
              }))}
            />
          ))
        ) : (
          <p className={styles['loading']}>Ничего не найдено 😢</p>
        )}
      </div>
    </>
  );
}

export default ProductList;
