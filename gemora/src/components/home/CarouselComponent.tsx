import React from 'react';
import {Carousel} from 'react-bootstrap';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img6.jpg';

const carouselData = [
    {
        label: 'First slide label',
        description: 'This is the description of the first slide.',
        img: img1,
    },
    {
        label: 'Second slide label',
        description: 'This is the description of the second slide.',
        img: img2,
    },
    {
        label: 'Third slide label',
        description: 'This is the description of the third slide.',
        img: img3,
    },
];

const CarouselComponent = () => {
    return (
        <Carousel>
            {carouselData.map((slide, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={slide.img}
                        alt={slide.label}
                        style={{maxWidth: '100%', maxHeight: '70vh', margin: '0 auto'}}
                    />
                    <Carousel.Caption>
                        <h3>{slide.label}</h3>
                        <p>{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;