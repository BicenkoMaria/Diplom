import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Slider.module.css';


function Cards_Carousel({text, elements}) {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
      };
      

    return (
        <div className={styles.forcarousel}>
          <h5>{text}</h5>
          <Slider {...settings}>
            {elements.map(elements => (
                <Card 
                    key={elements.id} 
                    id={elements.id} 
                    img={elements.img} 
                    category={elements.category} 
                    title={elements.title}/>
            ))}   

          </Slider>
            
        </div>
      );
}

export default Cards_Carousel;
/*
            <Slider {...settings}>
            {elements.map(elements => (
                <Card 
                    key={elements.id} 
                    id={elements.id} 
                    img={elements.img} 
                    category={elements.category} 
                    title={elements.title}/>
            ))}    

            </Slider>
*/