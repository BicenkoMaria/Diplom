import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Card_with_price.module.css"

function Card_with_price({id, img, category, title, price}) {
    return(
        <Link href={`/site/Product/${id}`} className={styles.card}>
                <div className={styles.card.element}>
                        <Image className={styles.card_img} src={img} height={100} width={100}/>
                        <span className={styles.category}>{category}</span>
                        <span className={styles.name}>{title}</span>
                        <span className={styles.price}>{price}</span>
                </div>
        </Link>
    );
}

export default Card_with_price;

//card element with_price
/*
        <div className="card element with_price">
                <img class="card with_price" src={img} alt=""></img>
                <span class="category with_price">{category}</span>
                <span class="name with_price">{title}</span>
                <span class="price"><b>{price}</b></span>
        </div>
*/