import { useLocation, useNavigate } from "react-router-dom";
import { allCars } from "../data/allcars"; 
import "./CarList.css";

export default function CarList() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const model = queryParams.get("model");

  
  const filteredCars = model 
    ? allCars.filter(car => car.model === model) 
    : allCars;

  const handleAddToBasket = (car) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.push(car);
    localStorage.setItem("basket", JSON.stringify(basket));
    alert(`${car.model} добавлен в корзину!`);
  };

  return (
    <div className="carlist-container">
      <h1>{model ? `All ${model} Cars` : "Список автомобилей"}</h1>
      <div className="car-cards">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.img} alt={car.name} className="car-image" />
            <div className="car-info">
              <h2>{car.name}</h2>
              <p>Год: {car.year}</p>
            </div>
            <div className="car-actions">
              <button onClick={() => navigate(`/cars/${car.id}`)}>Details</button>
              <button onClick={() => handleAddToBasket(car)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="back-button">← Назад</button>
    </div>
  );
}
