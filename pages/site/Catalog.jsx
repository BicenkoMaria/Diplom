import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Catalog.module.css";
import Card_with_price from "@/components/Card_with_price";

/*
INSERT INTO public.product(
	product_id, name, category_name, material, size, 
	img1, img2, img3, img4, price, set_count, product_count, 
	foreign_painter_id, relevance, addition_date, rating, foreign_series_id, foreign_type_id)
	VALUES (13, 'Крылатый оберег', 'Брелок', 'ПВХ (поливинилхлорид), Металлический сплав', '35х35х20мм', 
			'/keychains/black_wings_keychains4.jpg', null, null, null, 219, 1, 20,
			2, true, '19.01.2024', 19, 7, 3);
*/

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/catalog');
    const data = await response.json();

    return {
        props: {product: data},
    }
}

function Catalog({product}) {

    /*
  const [types, setTypes] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/catalog');
      const data = await response.json();
      setTypes(data.slice(0, 5));
      setProduct(data.slice(5));
    }
    fetchData();
   }, [])
*/

    return(

        <div>
            <div className={styles.filters}>
                <div className={styles.categories}>
                    <Link href='/site/Catalog/postcards'>Открытки</Link>
                    <Link href='/site/Catalog/bookmarks'>Закладки</Link>
                    <Link href='/site/Catalog/keychains'>Брелоки</Link>
                    <Link href='/site/Catalog/stickers'>Стикеры</Link>
                    <Link href='/site/Catalog/others'>Прочее</Link>                   
                </div>
                
            </div>
            
            <>
                <div className={styles.sort}>
                    <span className={styles.other}>Сортировать по:</span>

                    <span className={styles.sorting}><Link href='/site/Sorting/rating' className={styles.link}>популярности</Link></span>
                    <span className={styles.sorting}><Link href='/site/Sorting/news' className={styles.link}>новизне</Link></span>
                    <span className={styles.sorting}><Link href='/site/Sorting/price_asb' className={styles.link}>сначала дешёвые</Link></span>
                    <span className={styles.sorting}><Link href='/site/Sorting/price_desc' className={styles.link}>сначала дорогие</Link></span>
                </div>

                <div className={styles.catalog}>
                    {product.map(product => (
                        
                        <Card_with_price 
                            key={product.product_id}
                            id={product.product_id} 
                            img={product.img1} 
                            category={product.category_name} 
                            title={product.name} 
                            price={product.price}/>
                
                    ))}
                </div>
            </>
        </div>
    );
} 

export default Catalog;