import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">CarSite</div>
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/cars">Автомобили</Link>
      </nav>
    </header>
  );
}
