
import { useParams, useNavigate } from "react-router-dom";
import { allCars } from "../data/allcars"; 
import "./Model.css";

export default function Model() {
  const { model } = useParams(); 
  const navigate = useNavigate();

  const filteredCars = allCars.filter(car => car.model === model);

 const handleAddToBasket = (car) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    const existingItem = basket.find((item) => item.id === car.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      basket.push({ ...car, quantity: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(basket));

    alert(`${car.name} добавлен в корзину!`);
  };

  return (
    <div className="models-container">
      <h1>{model} Cars</h1>
      <div className="model-cards">
        {filteredCars.map(car => (
          <div key={car.id} className="model-card2">
            <img src={car.img} alt={car.name} className="model-image"/>
            <div className="model-info">
              <h2>{car.name}</h2>
              <p>From {car.price}</p>
              <p>{car.zeroToHundred} sec</p>
              <p>Top Speed: {car.topSpeed} km/h</p>
              <p>Fuel: {car.fuel}</p>

            </div>
            <div className="model-actions">
              <button onClick={() => navigate(`/cars/${car.id}`)}>Details</button>
              <button onClick={() => handleAddToBasket(car)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
