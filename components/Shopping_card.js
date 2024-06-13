import React from "react";
import "./Shopping_card.css";
import love_icon from "./components_image/icons/si_Heart.svg";
import del_icon from "./components_image/icons/Trash.png";

function Shopping_card() {
    return(
        <div class="backet_card">
            <img className="card_img" src="./image/postcards_summer1.jpg" alt=""></img>
            <div className="in">
                <p><b>Заказ №1234567890 от 00.00.0000</b></p>
                <p>Набор открыток «Яркое лето»</p>           
            </div>

            <div className="in right">
                <p className="mark">В пути</p>
                <p>400 руб.</p>                 
            </div>

                   
        </div>
    );
}

export default Shopping_card;