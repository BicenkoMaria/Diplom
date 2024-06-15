import React from "react";
import Image from "next/image";
import styles from "@/styles/Product_page.module.css";
import Cards_Carousel from "@/components/Cards_Carousel";
import Test from "./test";
/*
export const getStaticPath = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const path = data.map(({id}) => ({
        params: { id: id.toString() },
    }))

    return {
        path,
        fallback: false,
    }

}

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        prors: { posts: data },
    }
}

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        prors: { post: data },
    }

}
*/
/*
export async function generateStaticParams() {
    const product = await fetch('http://localhost:3000/api/catalog').then((res) => res.json())
   
    return product.map((product) => ({
      id: product,
    }))
  }
*/
function Product_page() {

    return(
        /*<Test post={post}/>*/
        
        <div className={styles.prpage}>
            
            <div>
                <span>Каталог &gt; </span>
                <span>Открытки &gt; </span>
                <span>Серия «Яркие сезоны» &gt; </span>
                <span>Набор открыток «Яркое лето» </span>
            </div>  
            
            <div className={styles.column_left}>
                <div className={styles.for_img}>
                    <Image className={styles.small} src="/postcards_summer2.jpg" alt="" width={100} height={100}></Image>
                    <Image className={styles.small} src="/postcards_summer3.jpg" alt="" width={100} height={100}></Image>
                    <Image className={styles.small} src="/postcards_summer4.jpg" alt="" width={100} height={100}></Image>                
                    <Image className={styles.big} src="/postcards_summer1.jpg" alt="" width={100} height={100}></Image>
                </div>
            </div> 

            <div className={styles.column_right}>

                <h2 className={styles.page}>Набор открыток «Яркое лето»</h2>
                <h4 className={styles.page}>400 руб.</h4>

                <div className={styles.group}>
                    <button className={styles.buy}>Купить</button> 
                    <button className={styles.love}>
                    <Image src="/v.png" alt="" width={32} height={30}></Image>
                    </button>
                </div>

                <p>Набор открыток “Яркое лето” из серии “Яркие сезоны”.</p>
                <div className={styles.property}>
                    <p><span className={styles.property}>Количество:</span>4 шт.</p>
                    <p><span className={styles.property}>Материал:</span>плотная бумага 300 гр/м2 с матовой ламинацией</p>
                    <p><span className={styles.property}>Размер:</span>15 x 10,5см</p>
                    <p><span className={styles.property}>Художник:</span>Майя Пастельная</p>
                </div>
            </div>
            <div className={styles.end}>
            </div>  

            <Cards_Carousel 
                text="Вам может понравиться"
                elements={elements}/>
        </div>
        
    );
}

export default Product_page;


const elements = [
    {
        id: 1,
        img: "/postcards_summer1.jpg",
        category: "Набор открыток",
        title: "«Яркое лето»",
        price: "400 руб."
    },
    {
        id: 2,
        img: "/postcards_summer1.jpg",
        category: "Набор открыток",
        title: "«Яркое лето»",
        price: "400 руб."
    },
    {
        id: 3,
        img: "/postcards_summer1.jpg",
        category: "Набор открыток",
        title: "«Яркое лето»",
        price: "400 руб."
    },
    {
        id: 4,
        img: "/postcards_summer1.jpg",
        category: "Набор открыток",
        title: "«Яркое лето»",
        price: "400 руб."
    },
    {
        id: 5,
        img: "/postcards_summer1.jpg",
        category: "Набор открыток",
        title: "«Яркое лето»",
        price: "400 руб."
    },
    {
        id: 6,
        img: "/postcards_summer1.jpg",
        category: "Набор открыток",
        title: "«Яркое лето»",
        price: "400 руб."
    },
    {
        id: 7,
        img: "/postcards_summer1.jpg",
        category: "Набор открыток",
        title: "«Яркое лето»",
        price: "400 руб."
    },
    {
        id: 8,
        img: "/postcards_summer1.jpg",
        category: "Набор открыток",
        title: "«Яркое лето»",
        price: "400 руб."
    }
  
  ]