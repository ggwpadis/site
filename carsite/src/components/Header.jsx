import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">CarSite</div>
      <nav className="nav">
         <Link to="/">Home</Link>
         <Link to="/cars">Cars</Link>
         <Link to="/basket">Basket</Link>
         <Link to="/create-order">Create Order</Link>
      </nav>
    </header>
  );
}
