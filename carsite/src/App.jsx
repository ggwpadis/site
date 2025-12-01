import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
