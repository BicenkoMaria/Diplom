import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Catalog.module.css";
import Card_with_price from "@/components/Card_with_price";


export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/catalog/postcards/price_desc');
    const data = await response.json();

    return {
        props: {product: data},
    }
}

function Catalog({product}) {

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

                    <span className={styles.sorting}><Link href="/site/Sorting/postcards/rating" className={styles.link}>популярности</Link></span>
                    <span className={styles.sorting}><Link href="/site/Sorting/postcards/news" className={styles.link}>новизне</Link></span>
                    <span className={styles.sorting}><Link href="/site/Sorting/postcards/price_asb" className={styles.link}>сначала дешёвые</Link></span>
                    <span className={styles.sorting}><Link href="/site/Sorting/postcards/price_desc" className={styles.link}>сначала дорогие</Link></span>
                </div>

                <div className={styles.catalog}>
                    {product.map(product => (
                        
                        <Card_with_price 
                            key={product.product_id} 
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