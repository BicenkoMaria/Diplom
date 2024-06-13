import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Card.module.css";

function Card({id, img, category, title}) {
    return(
        <Link href={`/site/Product/${id}`} className={styles.card}>
            <div className={styles.card.element}>
                <Image className={styles.card_img} src={img} width={100} height={100}/>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.name}>{title}</span>        
            </div>
        </Link>
    );
}

export default Card;

