import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import slaider1 from '@/public/slaider1.jpg';
import slaider2 from '@/public/slaider2.jpg';
import slaider3 from '@/public/slaider3.jpg';
import styles from '../styles/Slider.module.css';
import Image from "next/image";


export default class Slider extends Component {
    render(){
        return(
            <Carousel className={styles.forslider}>
                <Carousel.Item>
                    <Image
                        className={styles.slider}
                        src={slaider1}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3>Огромный ассортимент</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image
                        className={styles.slider}
                        src={slaider2}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3>Красочные изображения</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image
                        className={styles.slider}
                        src={slaider3}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3>Большой выбор</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
