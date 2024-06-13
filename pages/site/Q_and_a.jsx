import React from "react";
import { Accordion } from "react-bootstrap";
import styles from "@/styles/Q_and_a.module.css";

function Q_and_a() {
    return(
        <div className={styles.qa}>
            <h1 className={styles.class}>Ответы на вопросы</h1>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Сколько стоит доставка?</Accordion.Header>
                    <Accordion.Body>
                        Цена доставки индивидуальна и зависит как от вашего заказа, так и пункта назначения.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Сколько времени занимает доставка?</Accordion.Header>
                    <Accordion.Body>
                        Все зависит от дальности вашего населенного пункта, в среднем доставка занимает 5-15 дней.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Есть ли минимальная сумма заказа?</Accordion.Header>
                    <Accordion.Body>
                        Вы можете сделать заказ на любую сумму. Ни в чём себе не отказывайте!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Как узнать из чего сделан предмет и какого он размера?</Accordion.Header>
                    <Accordion.Body>
                        Подробнее об изделии вы сможете узнать в карточке товара, в его характеристиках.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Можно заказать один предмет из набора?</Accordion.Header>
                    <Accordion.Body>
                        К сожалению, мы не можем изменить состав конкретного товара, поэтому наборы не разбиваются. 
                        Исключением является заказ бокса.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Можно сделать товар на заказ?</Accordion.Header>
                    <Accordion.Body>
                        Мы с удовольствием сотрудничаем со многими писателями, по чьим историям мы изготавливаем сувениры.
                        Кроме того, вы всегда можете предложить собственные идеи по товарам, наборам или тематикам новых 
                        коллекций. Не сомневайтесь, мы читаем каждое письмо.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>У вас есть скидки?</Accordion.Header>
                    <Accordion.Body>
                        Конечно! Мы регулярно проводим акции и распродажи!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Q_and_a;