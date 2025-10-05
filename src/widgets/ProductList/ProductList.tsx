import Card from "../Card/Card";
import styles from './ProductList.module.css'
import { useDispatch} from "react-redux";
import { addToCart } from "../../app/providers/cartSlice";
import { addToLiked } from "../../app/providers/likedSlice";
import { useState } from "react";
import Search from "../Search/Search";
import { useGetProductsQuery } from "../../app/providers/productsApi";

function ProductList() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useGetProductsQuery(20);

  const products = data?.data ?? [];

  const filteredProducts = products.filter((el: any) =>
    el.name.toLowerCase().includes(search.toLowerCase()) ||
    el.description.toLowerCase().includes(search.toLowerCase())
  );

  if(isLoading){
    return <p className={styles['loading']}>Загрузка .... </p>
  }

  if(isError){
    return <p className={styles['error']}>Ошибка при загрузке продуктов </p>
  }

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
