import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={'/assets/fishley.png'} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={'/assets/poster.png'} alt="second slide" />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={'/assets/sale.jpg'} alt="third slide" />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={'/assets/easter.jpg'} alt="fourth slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent
