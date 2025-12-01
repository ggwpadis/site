import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Добро пожаловать на сайт автомобилей</h1>
      <Link to="/cars">Перейти к списку машин</Link>
    </div>
  );
}
