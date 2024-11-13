import React, { useState, useEffect } from 'react';
import '../styles/carousell.css';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        '/src/assets/Frame 18.webp',
        '/src/assets/Frame 18.webp',
        '/src/assets/Frame 18.webp',
        '/src/assets/Frame 18.webp',
        '/src/assets/Frame 18.webp',
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [images.length]);

    return (
        <div className="carousel">
            <div className="carousel-content">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`carousel-slide-${index}`}
                            className="carousel-image"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
