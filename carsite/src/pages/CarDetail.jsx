import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";
import "./CarDetail.css";

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id === Number(id));

  if (!car) return <h2 className="not-found">Машина не найдена</h2>;

  return (
    <div className="cardetail-container">
      <h1>{car.name}</h1>
      <div className="car-detail-card">
        <img src={car.img} alt={car.name} className="car-detail-image" />
        <div className="car-detail-info">
          <h2>{car.brand}</h2>
          <p><strong>Год выпуска:</strong> {car.year}</p>
          <p><strong>Мощность:</strong> {car.hp} л.с.</p>
          <p><strong>Разгон 0-100 км/ч:</strong> {car.zeroToHundred} с</p>
          <p><strong>Макс. скорость:</strong> {car.topSpeed} км/ч</p>
          <p><strong>Цена:</strong> {car.price}</p>
        </div>
      </div>
      <Link to="/cars" className="back-button">← Назад к списку</Link>
    </div>
  );
}
