import { useParams, useNavigate } from "react-router-dom";
import { allCars } from "../data/allcars";
import "./CarDetail.css";

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const car = allCars.find((c) => c.id === Number(id));

  if (!car) {
    return <h2 className="not-found">Машина не найдена</h2>;
  }

  // Функция возврата на предыдущую страницу
  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="cardetail-container">
      <h1 className="car-title">{car.name}</h1>
      <div className="car-detail-card">
        <img src={car.img} alt={car.name} className="car-detail-image" />
        <div className="car-detail-info">
          <h2 className="car-model">{car.model}</h2>
          <p><strong>Год выпуска:</strong> {car.year}</p>
          <p><strong>Мощность:</strong> {car.hp} л.с.</p>
          <p><strong>Разгон 0–100 км/ч:</strong> {car.zeroToHundred} c</p>
          <p><strong>Макс. скорость:</strong> {car.topSpeed} км/ч</p>
          <p><strong>Тип топлива:</strong> {car.fuel}</p>
          <p className="car-price"><strong>Цена:</strong> {car.price}</p>
        </div>
      </div>

      <button onClick={handleBack} className="back-button">
        ← Назад
      </button>
    </div>
  );
}