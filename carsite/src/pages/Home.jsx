import { useState } from "react";
import { sliderCars } from "../data/sliderCars"; // для слайдера
import { cars } from "../data/cars"; // для списка машин
import "./Home.css";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null); // для деталей

  const prevCar = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderCars.length - 1 : prev - 1));
  };

  const nextCar = () => {
    setCurrentIndex((prev) =>
      prev === sliderCars.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="home-container">
      {/* Герой-секция */}
      <div className="hero">
        <img
          src="https://images-porsche.imgix.net/-/media/8B82487A0FEC478B828DB019279AC449_57971C33E40441A7B11A155B4CCA1F66_CZ26W10OX0005-911-turbo-s-side?w=1759&ar=16%3A9&q=85&auto=format"
          alt="Hero Car"
          className="hero-image"
        />
      </div>
      <div className="hero-text">
        <h1>Your Porsche journey starts now.</h1>
        <p>Discover the finest cars from top brands around the world</p>
      </div>

      {/* Слайдер */}
      <div className="car-slider">
        <button className="slider-btn" onClick={prevCar}>
          &#8592;
        </button>
        <div className="car-slide">
          <img
            src={sliderCars[currentIndex].img}
            alt={sliderCars[currentIndex].name}
            className="slide-image"
          />
          <h2>{sliderCars[currentIndex].name}</h2>
        </div>
        <button className="slider-btn" onClick={nextCar}>
          &#8594;
        </button>
      </div>

      {/* Список машин */}
      <div className="carlist-container">
        <h2>Our Cars</h2>
        <div className="car-cards">
          {cars.map((car) => (
            <div
              key={car.id}
              className="car-card"
              onClick={() => setSelectedCar(car)}
            >
              <img src={car.img} className="car-image" alt={car.name} />
              <div className="car-info">
                <h3>{car.name}</h3>
                <p>{car.brand}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
