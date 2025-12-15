import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail";

import BasketList from "./pages/BasketList";
import BasketDetail from "./pages/BasketDetail";
import CreateOrder from "./pages/CreateOrder";
import UpdateOrder from "./pages/UpdateOrder";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />

        <Routes>
          {/* Основные страницы */}
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetail />} />

          {/* Корзина и заказы */}
          <Route path="/basket" element={<BasketList />} />
          <Route path="/basket/:id" element={<BasketDetail />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/update-order/:id" element={<UpdateOrder />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

