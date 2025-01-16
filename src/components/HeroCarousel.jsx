import React, { useEffect, useState } from 'react'

const images = [
    "/Images/gal4.jpg",
    "/Images/gal9.jpg",
    "/Images/gal6.jpg",
    "/Images/gal8.jpg",
];

function HeroCarousel() {
  
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div className='relative h-screen'>
        <div className='h-screen bg-cover bg-center transform:transition-all duration-700'
            style={{
                backgroundImage: `url('${images[currentIndex]}')`,
            }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore More, Manage Better
            </h1>
            <p className="text-lg md:text-2xl text-white mb-8">
            Take your travel business to the next level with our CRM solutions.
            </p>
            <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-700 transform transition duration-300 hover:scale-105">
            Request a Demo
            </button>
      </div>
    </div>
  )
}

export default HeroCarousel