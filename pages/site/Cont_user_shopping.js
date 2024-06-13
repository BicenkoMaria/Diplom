import React from "react";
//import Shopping_card from "../components/Shopping_card";
import "./Cont_user_shopping.css";
import user from "../components/components_image/icons/User.svg";
import user_info from "../components/components_image/icons/Folder_open.svg";
import user_shopping from "../components/components_image/icons/Bag.svg";
import user_love from "../components/components_image/icons/si_Heart.svg";
//import out from "../components/components_image/icons/Import.png";

function Cont_user_shopping() {
    return(
        <div className="shop">
            <div className="column-left span-flex">
                <div className="icon"><img src={user} alt=""></img><span className="in">Профиль</span></div>
                <div className="icon"><img src={user_info} alt=""></img><span className="in">Личные данные</span></div>
                <div className="icon"><img src={user_shopping} alt=""></img><span className="in">Заказы</span></div>
                <div className="icon"><img src={user_love} alt=""></img><span className="in">Избранное</span></div>
            </div>
            <div className="column-right">
                <h1><b>ЗАКАЗЫ</b></h1>
                <span>Активные</span>
                <span>Завершённые</span>
                <span>Отменённые</span>
                <Shopping_card/>
            </div>
            
        </div>
    );
}

export default Cont_user_shopping;