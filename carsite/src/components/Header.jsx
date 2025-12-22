
import { Link } from "react-router-dom";
import "./Header.css";
import userIcon from "/img/userLogo.svg";
import logo from "/img/logo.svg";
import basket from "/img/basket.svg";


export default function Header({ user, onLogout }) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/">Home</Link></div>
         <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/basket">
            <img src={basket} alt="Basket" className="icon" />
          </Link>
          {user ? (
            <>
              <span className="user-name">{user.name}</span>
              <button className="logout-btn" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">
              <img src={userIcon} alt="User" className="icon" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
