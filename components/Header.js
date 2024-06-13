import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from "../styles/Header_Footer.module.css";
import logo from "@/public/logo.png";
import login from "@/public/User_cicrle_light.svg";
import favourite from "@/public/si_Heart.svg";
import backet from "@/public/Cart.svg";
import Link from "next/link";
import Image from "next/image";

function Header() {

    return(
        <header>
            <Link href="/"><Image className={styles.logo} src={logo}/></Link>
            

            <div className={styles.list}>
                <Link href="/site/Catalog" className={styles.head}>Каталог</Link>
                <Link href="/site/Box" className={styles.head}>Боксы</Link>
                <Link href="/site/Payment_and_delivery" className={styles.head}>Доставка и оплата</Link>
                <Link href="/site/Cooperation" className={styles.head}>Сотрудничество</Link>
                <Link href="/site/Q_and_a" className={styles.head}>Ответы на вопросы</Link>
                <Link href="/site/About_us" className={styles.head}>О нас</Link>
            </div>

            <div className={styles.icons}>
              <Link href="/site/Favourite"><Image src={favourite} className={styles.icon}/></Link>
              <Link href="/site/Backet"><Image src={backet} className={styles.icon}/></Link>          
            </div>
        </header>
    );
}

export default Header;

/*
<Link href="/" onClick={handleShow}><Image src={login} className={styles.icon}/></Link>

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

              <Modal show={show} onHide={handleClose}>
              <Tabs
                defaultActiveKey="login"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="login" title="Вход"> 
                  <Modal.Body>
                    <div className={styles.login}>
                      <input type="email" placeholder="Email"></input>
                      <input type="password" placeholder="Пароль"></input>
                      <a>Забыли пароль?</a>
                      <button onClick={handleClose}>Войти</button>
                    </div>
                  </Modal.Body>
                </Tab>
                  <Tab eventKey="profile" title="Авторизация">
                    <div className={styles.autorization}>
                      <input type="text" placeholder="Имя"></input>
                      <input type="text" placeholder="Фамилия"></input>
                      <input type="text" placeholder="Отчество"></input>
                      <input type="email" placeholder="Email"></input>
                      <input type="password" placeholder="Пароль"></input>
                      <button onClick={handleClose}>Зарегистрироваться</button>
                    </div>
                  </Tab>
                </Tabs>
            </Modal>
*/