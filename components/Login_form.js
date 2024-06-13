import React from "react";
import styles from "@/styles/Login_form.module.css";

function Login_form() {
    return(
        <div>
            <div className={styles.login}>
                <input type={styles.email} placeholder="Email"></input>
                <input type={styles.password} placeholder="Пароль"></input>
                <a>Забыли пароль?</a>
                <button>Войти</button>
            </div>
            
            <div className={styles.autorization}>
                <input type="text" placeholder="Имя"></input>
                <input type="text" placeholder="Фамилия"></input>
                <input type="text" placeholder="Отчество"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Пароль"></input>
                <button>Зарегистрироваться</button>
            </div>
             

        </div>
    );
}

export default Login_form;

/*

*/