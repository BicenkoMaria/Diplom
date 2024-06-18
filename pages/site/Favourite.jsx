import Card from "@/components/Card";
import styles from "@/styles/Favourite.module.css";

function Favourite() {
    return(
        <div className={styles.main}>
            <h1 className={styles.h1}>ИЗБРАННОЕ</h1>
            <div className={styles.product}>
                <Card
                    key = '1'
                    id= '1'
                    img= "/postcards_summer1.jpg"
                    category= "Набор открыток" 
                    title= "«Яркое лето»"/>
                <Card
                    key = '1'
                    id= '1'
                    img= "/postcards_summer1.jpg"
                    category= "Набор открыток" 
                    title= "«Яркое лето»"/>
                <Card
                    key = '1'
                    id= '1'
                    img= "/postcards_summer1.jpg"
                    category= "Набор открыток" 
                    title= "«Яркое лето»"/>
            </div>
        </div>
    )
}

export default Favourite;