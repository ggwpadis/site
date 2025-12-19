import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="logo">CarSite</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/basket">Basket</Link>
        {!user && <Link to="/register">Register</Link>}
        {!user && <Link to="/login">Login</Link>}
        {user && <span>Hello, {user.name}</span>}
        {user && <button onClick={onLogout}>Logout</button>}
      </nav>
    </header>
  );
}