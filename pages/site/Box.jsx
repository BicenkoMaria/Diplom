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
                defaultActiveKey="one"
                id="uncontrolled-tab-example"
                className="mb-4"
            >
                <Tab eventKey="one" title="Шаг №1">
                    <p>
                        Шаг №1 - выбериите размер бокса
                    </p>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span>Крошечный (5 предметов)</span>
                    </label><br/>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span>Маленький (7 предметов)</span>
                    </label><br/>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span>Средний (10 предметов)</span>
                    </label><br/>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span>Большой (14 предметов)</span>
                    </label><br/>
                    <label className={styles.in}>
                        <input type="radio" name="question"></input>
                        <span>Огромный (20 предметов)</span>
                    </label>
                </Tab>
                
                <Tab eventKey="two" title="Шаг №2">
                    Шаг №2 - выберите желаемые товары*
                    <br/>
                    <label className={styles.in}>
                        <input type="checkbox" name="категория" value="Открытки" />
                        Открытки
                    </label> <br/>

                    <label className={styles.in}>
                        <input type="checkbox" name="категория" value="Закладки" />
                        Закладки
                    </label> <br/>

                    <label className={styles.in}>
                        <input type="checkbox" name="категория" value="Брелоки" />
                        Брелоки
                    </label> <br/>

                    <label className={styles.in}>
                        <input type="checkbox" name="категория" value="Стикеры" />
                        Стикеры
                    </label> <br/>

                    <label className={styles.in}>
                        <input type="checkbox" name="категория" value="Прочее" />
                        Прочее
                    </label> <br/>

                    <label className={styles.in}>
                        <input type="checkbox" name="категория" value="Любой" />
                        Не имеет значения
                    </label> <br/>

                    * наполнение бокса зависит от размера, но мы обязательно постараемся учесть ваши предпочтения
                </Tab>

                <Tab eventKey="three" title="Шаг №3">
                    <p>
                        Шаг №3 - выберите серии товаров
                    </p>
                    <>
                        <span><input type="checkbox" /> Серия: Яркие сезоны</span><br/>
                        <span><input type="checkbox" /> Серия: Крылья</span><br/>
                        <span><input type="checkbox" /> Серия: Фантастика</span><br/>
                        <span><input type="checkbox" /> Серия: Летняя (лимитированная)</span><br/>
                    </>
                </Tab>

                <Tab eventKey="four" title="Шаг №4">
                    Введите ваши данные: <br/><br/>
                    <span>Имя:</span><br/>
                    <input type="text" name="name" className={styles.in}></input><br/>
                    <span>Фамилия:</span><br/>
                    <input type="text" name="surname" className={styles.in}></input><br/>
                    <span>Email:</span><br/>
                    <input type="email" name="email" className={styles.in}></input><br/>
                    <button>Оставить заявку</button> 
                </Tab>

            </Tabs>
                           
            </div>

        </div>
    );
}

export default Box;