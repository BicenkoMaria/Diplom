import React from "react";
import styles from"@/styles/Backet.module.css"
import Backet_card from "@/components/Backet_card";

function Backet() {
    return(
        <div className={styles.backet}>
            
            <div className={styles.head}>
                <h1><b>КОРЗИНА</b></h1>
                <span>1 товар</span>
            </div>

            <div className={styles.left}>
                <Backet_card />
                <Backet_card />
            </div>
            

            <div className={styles.right}>
                <div className={styles.flex}>
                    <span><b>1 товар</b></span>
                    <span><b>400 руб.</b></span> 
                </div>

                <button className={styles.backet}><b>Перейти к оформлению</b></button>                
            </div>

        </div>
    );
}

export default Backet;