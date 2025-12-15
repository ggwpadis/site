import { useState } from "react";
import { createOrder } from "../data/fakeApi";
import { useNavigate } from "react-router-dom";
import { cars } from "../data/cars";
import "./basket.css";

export default function CreateOrder() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [car, setCar] = useState(cars[0].name);
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      name,
      car,
      quantity
    };
    createOrder(newOrder);
    navigate("/basket");
  };

  return (
    <div className="basket-container">
      <h1>Create New Order</h1>
      <form className="basket-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} required />

        <label>Car:</label>
        <select value={car} onChange={e => setCar(e.target.value)}>
          {cars.map(c => (
            <option key={c.id} value={c.name}>{c.name}</option>
          ))}
        </select>

        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} min="1" required />

        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}
