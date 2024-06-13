import React from "react";
//import "./Cont_about_series.css"

function About_series() {
    return(
        <div className="info">
            <div>
                <img className="info" src="image\info.jpg"></img>

                <h1 className="info"><b>Майя Пастельная</b></h1>
                <p>Белгородская художница, сотрудничает с нашим магазином с самого основания. Создательница таких популярных коллекций, как:
                    <ul> 
                        <li className="info">Закладки «Рождественские ели»</li>
                        <li className="info">Закладки «Цветы»</li>
                        <li className="info">Закладки «Виноградные лозы»</li>
                        <li className="info">Серия открыток «Яркие сезоны»: «Яркая зима», «Яркая весна», «Яркое лето», «Яркая осень»</li>
                        <li className="info">Серия открыток «Фантастические пейзажи»</li>
                    </ul>
                </p>
                <div className="clearfix"></div>
            </div>
            

            <button>Смотреть все товары этой художницы в каталоге</button>
    </div>
    );
}

export default About_series;