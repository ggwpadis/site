// App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Страницы
import Home from "./pages/Home";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail";
import BasketList from "./pages/BasketList";
import BasketDetail from "./pages/BasketDetail";
import CreateOrder from "./pages/CreateOrder";
import UpdateOrder from "./pages/UpdateOrder";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Model from "./pages/Model";

// Компоненты
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // Состояние пользователя
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  // Логин
  const handleLogin = (userData) => {
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setUser(userData);
  };

  // Логаут
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header user={user} onLogout={handleLogout} />

        <Routes>
          {/* Основные страницы */}
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/models/:model" element={<Model />} />


          {/* Корзина и заказы */}
          <Route path="/basket" element={<BasketList user={user} />} />
          <Route path="/basket/:id" element={<BasketDetail user={user} />} />
          <Route path="/create-order" element={<CreateOrder user={user} />} />
          <Route path="/update-order/:id" element={<UpdateOrder user={user} />} />

          {/* Регистрация и логин */}
          <Route path="/register" element={<Register onRegister={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
