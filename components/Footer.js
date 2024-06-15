import React from "react";
import styles from "../styles/Header_Footer.module.css";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return(
        <footer>
            <Image className={styles.logo} src={logo}/>

            <div className={styles.grid}>
                <Link href="/site/Catalog" className={styles.gridel}>Каталог</Link>
                <Link href="/site/About_us" className={styles.gridel}>О нас</Link>
                <span className={styles.gridel}>Контакты:</span>
                <span className={styles.gridel}>Мы в соц сетях:</span>
                <Link href="/site/Box" className={styles.gridel}>Собрать бокс</Link>
                <Link href="/site/Payment_and_delivery" className={styles.gridel}>Доставка и оплата</Link>
                <span className={styles.gridel}>+7(000)000-00-00</span>
                <span className={styles.gridel}>Ресурс 1</span>
                <Link href="/site/Cooperation" className={styles.gridel}>Сотрудничество</Link>
                <Link href="/site/Q_and_a" className={styles.gridel}>Ответы на вопросы</Link>
                <span className={styles.gridel}>noname@pocta.ru</span>
                <span className={styles.gridel}>Ресурс 2</span>
            </div>

        </footer> 
    )
}
    
export default Footer;