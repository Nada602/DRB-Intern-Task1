"use client";
import React, { useRef } from "react";
import car1 from "../../public/Rectangle10.png";
import car2 from "../../public/Rectangle11.png";
import car3 from "../../public/Rectangle12.png";
import car4 from "../../public/Rectangle10.png";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarCard from "./CarCard";

interface Car {
  id: number;
  img: StaticImageData;
  title?: string;
  description?: string;
}

function CarGallery() {
  const sliderRef = useRef<Slider>(null);

  const cars: Car[] = [
    { 
      id: 1, 
      img: car1,
      title: "Luxurious Auto Mobile",
      description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam."
    },
    { 
      id: 2, 
      img: car2,
      title: "Luxurious Auto Mobile",
      description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam."
    },
    { 
      id: 3, 
      img: car3,
      title: "Luxurious Auto Mobile",
      description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam."
    },
    { 
      id: 4, 
      img: car4,
      title: "Luxurious Auto Mobile",
      description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam."
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint - shows 2 cards
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm breakpoint - shows 1 card
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className="py-20 px-6 bg-[#E9E9E9]" id="cars">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="max-w-2xl">
            <h1 className="font-extrabold text-3xl md:text-4xl mb-3">
              OUR LATEST CARS
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
              vestibulum diam sit adipis cing elit adipis cing elit.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={goToPrev}
              className="w-12 h-12 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 bg-orange-500 text-white hover:bg-orange-600 rounded flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slick Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {cars.map((car) => (
            <CarCard
              key={car.id}
              img={car.img}
              title={car.title}
              description={car.description}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CarGallery;