import { useState, useEffect } from 'react';
import '../styles/carousell.css';

function Carousel() {
    // State to track the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of images to display in the carousel
    const images = [
        '/src/assets/GameLogo/Frame 18.webp',
        '/src/assets/GameLogo/Frame 18.webp',
        '/src/assets/GameLogo/Frame 18.webp',
        '/src/assets/GameLogo/Frame 18.webp',
        '/src/assets/GameLogo/Frame 18.webp',
    ];

    // Effect to automatically change the slide every 5 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(slideInterval);
    }, [images.length]);

    return (
        <div className="carousel">
            <div className="carousel-content">
                {/* Track that holds all the images */}
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {/* Render each image in the carousel */}
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
