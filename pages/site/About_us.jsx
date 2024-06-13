import React from "react";
import Image from "next/image";
import styles from "@/styles/About_us.module.css";
import img1 from "@/public/about_us.jpg";
import img2 from "@/public/autumn_postcards.jpg";
import img3 from "@/public/magic_stickers.jpg";
import img4 from "@/public/flovers_bookmars.jpg";

function About_us() {
    return(
        <div className={styles.abus}>
            <h1 className={styles.class}>О нас</h1>

            <div>
                <Image src={img1} className={styles.first}/>
                <img className={styles.first} src="image\about_us1.jpg" alt=""></img>

                <p className={styles.abus}>
                    Мы новый, развивающийся бренд.
                    <br/><br/>
                    Благодаря сотрудничеству со многими авторами наш магазин пополнился уникальными коллекциями по историям, полюбившимся многим читателям.
                    <br/><br/>
                    Все товары созданы с любовью и тщанием - поверьте, мы сами с удовольствием пользуемся нашей продукцией.
                    <br/><br/>
                    В нашем магазине доступны для приобретения самые разнообразные позиции: открытки, стикеры, значки, закладки, акриловые стенды и шопперы.
                    <br/><br/>
                    Каждый посетитель может предложить свои идеи тем для серий через форму обратной связи. Также авторы могут договориться о сотрудничестве с нами. Продробнее на этой странице. 
                </p>
                <div className={styles.clearfix}></div>
            </div>

            <div className={styles.abus_flex}>
                <div className={styles.in}>
                    <span className={styles.nameup}>Яркие, красочные и разнообразные коллекции</span>
                    <Image src={img2} className={styles.abus}/>
                </div>

                <div className={styles.in}>
                    <Image src={img3} className={styles.abus}/>
                    <span className={styles.namedown}>Большой и разнообразный ассортимент </span>
                </div>

                <div className={styles.in}>
                    <span className={styles.nameup}>Уникальные изображения от профессиональных художников</span>
                    <Image src={img4} className={styles.abus}/>
                </div>
            </div>
        </div>
    );
}

export default About_us;