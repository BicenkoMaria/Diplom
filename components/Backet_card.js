import React from "react";
import styles from "../styles/Backet_card.module.css";
import love_icon from "@/public/si_Heart.svg";
import del_icon from "@/public/Trash.png";
import Image from "next/image";

function Backet_card() {
    return(
        <div className={styles.backet_card}>
            <Image className={styles.card_img} src="/postcards_summer1.jpg" width={100} height={100}/>
            <div className={styles.in}>
                <p>Набор открыток «Яркое лето»</p>
                <p>400 руб.</p>
                <button className={styles.count}><span className={styles.count}>-</span></button> 
                <span>1</span>
                <button className={styles.count}><span className={styles.count}>+</span></button>                
            </div>

            <Image className={styles.icons} src={love_icon}/>
            <Image className={styles.icons} src={del_icon}/> 
                   
        </div>
    );
}

export default Backet_card;