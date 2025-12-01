import { Link } from "react-router-dom";
import "./CarList.css";
import { cars } from "../data/cars"; 

export default function CarList() {
  return (
    <div className="carlist-container">
      <h1>Список автомобилей</h1>
      <div className="car-cards">
        {cars.map((car) => (
          <Link key={car.id} to={`/cars/${car.id}`} className="car-card">
            <img src={car.img} alt={car.name} className="car-image" />
            <div className="car-info">
              <h2>{car.name}</h2>
              <p>Год: {car.year}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/" className="back-button">← Назад на главную</Link>
    </div>
  );
}
