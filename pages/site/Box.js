import styles from "@/styles/Box.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Box () {
    return(
        <div className={styles.main}>
            <h1 className={styles.h1}>Собрать бокс</h1>
            <p>
                Наш магазин предоставляет уникальную возможность собрать подарочный бокс из имеющихся в наличии товаров магазина.<br/>
                Вы можете сами выбрать его размер, а также тематику товаров. Остальное - пусть останется приятным сюрпризом!<br/>
            </p>
            <p>
                Следуйте простым инструкциям:
            </p>
            <div className={styles.label}>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-4"
            >
                <Tab eventKey="home" title="Home">
                    <p>
                        Шаг №1 - выбериите размер боокса
                    </p>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span className={styles.radio}>Крошечный (5 предметов)</span>
                    </label>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span className={styles.radio}>Маленький (7 предметов)</span>
                    </label>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span className={styles.radio}>Средний (10 предметов)</span>
                    </label>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span className={styles.radio}>Большой (14 предметов)</span>
                    </label>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span className={styles.radio}>Огромный (20 предметов)</span>
                    </label>
                </Tab>
                
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>

                <Tab eventKey="contact" title="Contact">
                    <p>
                        Шаг №2 - выберите серии товаров
                    </p>
                    <>
                        <span><input type="checkbox" /> Серия:</span>
                        <span><input type="checkbox" /> Серия:</span>
                        <span><input type="checkbox" /> Серия:</span>
                        <span><input type="checkbox" /> Серия:</span>
                        <span><input type="checkbox" /> Серия:</span>
                        <span><input type="checkbox" /> Серия:</span>
                        <span><input type="checkbox" /> Серия:</span>
                        <span><input type="checkbox" /> Серия:</span>
                    </>
                </Tab>

                <Tab eventKey="profile2" title="Profile">
                    <button>Оставить заявку</button> 
                </Tab>

            </Tabs>
                           
            </div>

        </div>
    );
}

export default Box;