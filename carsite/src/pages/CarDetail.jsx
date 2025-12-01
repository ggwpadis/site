import { useParams } from "react-router-dom";
import { cars } from "../data/cars";

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id === Number(id));

  if (!car) return <h2>Машина не найдена</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Детальная информация</h2>
      <img src={car.img} width={300} />
      <h3>{car.name}</h3>
      <p>Год: {car.year}</p>
    </div>
  );
}
