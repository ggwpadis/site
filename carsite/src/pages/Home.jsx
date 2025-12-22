import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { sliderCars } from "../data/sliderCars";
import { cars } from "../data/cars"; 
import "./Home.css";
import arrow from "/img/ar.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null); 
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      {/* Герой-секция */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3400,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="hero-swiper"
      >
        {sliderCars.map((car, index) => (
          <SwiperSlide
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${car.img})` }}
          >
          </SwiperSlide>
        ))}
      </Swiper>


      {/* Список машин */}
      <div className="carlist-container">
        <h2>Models</h2>
        <div className="car-cards">
          {cars.map((car) => (
            <div
              key={car.id}
              className="car-card"
             onClick={() => navigate(`/models/${car.model}`)} 
            >
              <img src={car.logo} className="car-model-logo" alt={car.model} />
              <img src={car.img} className="car-image" alt={car.name} />

              <div className="car-info">
                <div className="car-text">
                  <span className="fuel">Petrol</span>
                  <h3>{car.name}</h3>
                </div>
                <img src={arrow} alt="Arrow" className="icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
