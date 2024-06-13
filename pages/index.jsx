import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/Slider";
import styles from "@/styles/Home.module.css";
import Login_form from "@/components/Login_form";
import Cards_Carousel from "@/components/Cards_Carousel";
import Card from "@/components/Card";

import postcard from "@/public/postcard.jpg";
import sticker from "@/public/sticker.jpg";
import bookmark from "@/public/flovers_bookmarks.jpg";
import keychain from "@/public/keychain.jpg";
import other from "@/public/other.jpg";


export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/catalog');
  const data = await response.json();

  return {
      props: {product: data},
  }
}



export default function Home(product) {
  console.log(product);
  return (
    <>
      <Head>
        <title>Diplom</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
        
      </Head>

      <div className={styles.home}>
        <Slider />
        <p className={styles.text}>
        Добро пожаловать в магазин авторской канцелярии, книжных мелочей и сувениров по<br/>
         вашим любимым книжным сериям!
        </p>
        
        <Cards_Carousel 
          text="ХИТЫ ПРОДАЖ"
          elements={elements}/>
        <p className={styles.text}><Link href="site/Sorting/rating" className={styles.link}>Смотреть в каталоге →</Link></p>  

        <div className={styles.assort}>
          <h5>АССОРТИМЕНТ</h5>
          <div className={styles.flex}>

            <Link href={'/site/Catalog/postcards'} className={styles.card}>
              <div>
                  <Image className={styles.card_img} src={postcard} width={100} height={100}/>
                      <span className={styles.name}>Открытки</span>        
              </div>
            </Link>

            <Link href={'/site/Catalog/stickers'} className={styles.card}>
              <div>
                  <Image className={styles.card_img} src={sticker} width={100} height={100}/>
                      <span className={styles.name}>Стикеры</span>        
              </div>
            </Link>

            <Link href={'/site/Catalog/bookmarks'} className={styles.card}>
              <div>
                  <Image className={styles.card_img} src={bookmark} width={100} height={100}/>
                      <span className={styles.name}>Закладки</span>        
              </div>
            </Link>

            <Link href={'/site/Catalog/keychains'} className={styles.card}>
              <div>
                  <Image className={styles.card_img} src={keychain} width={100} height={100}/>
                      <span className={styles.name}>Брелоки</span>        
              </div>
            </Link>

            <Link href={'/site/Catalog/others'} className={styles.card}>
              <div>
                  <Image className={styles.card_img} src={other} width={100} height={100}/>
                      <span className={styles.name}>Прочее</span>        
              </div>
            </Link>

          </div>
        </div>
        <p className={styles.text}><Link href="site/Catalog" className={styles.link}>Смотреть в каталоге →</Link></p> 
        
        <Cards_Carousel 
          text="НОВИНКИ"
          elements = {elements}/> 
        <p className={styles.text}><Link href="site/Sorting/news" className={styles.link}>Смотреть в каталоге →</Link></p>        
      </div>

      
    </>
  );
}

/*

*/

const elements = [
  {
      id: 1,
      img: "/fantasy_postcards.jpg",
      category: "Набор открыток",
      title: "«Фантастические пейзажи»",
      price: "450 руб."
  },
  {
      id: 2,
      img: "/fantasy_postcards.jpg",
      category: "Набор открыток",
      title: "«Фантастические пейзажи»",
      price: "450 руб."
  },
  {
      id: 3,
      img: "/fantasy_postcards.jpg",
      category: "Набор открыток",
      title: "«Фантастические пейзажи»",
      price: "450 руб."
  },
  {
      id: 4,
      img: "/fantasy_postcards.jpg",
      category: "Набор открыток",
      title: "«Фантастические пейзажи»",
      price: "450 руб."
  },
  {
      id: 5,
      img: "/fantasy_postcards.jpg",
      category: "Набор открыток",
      title: "«Фантастические пейзажи»",
      price: "450 руб."
  },
  {
      id: 6,
      img: "/fantasy_postcards.jpg",
      category: "Набор открыток",
      title: "«Фантастические пейзажи»",
      price: "450 руб."
  },
  {
      id: 7,
      img: "/fantasy_postcards.jpg",
      category: "Набор открыток",
      title: "«Фантастические пейзажи»",
      price: "450 руб."
  },
  {
      id: 8,
      img: "/fantasy_postcards.jpg",
      category: "Набор открыток",
      title: "«Фантастические пейзажи»",
      price: "450 руб."
  }

]