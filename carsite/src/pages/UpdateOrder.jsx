import { useParams, useNavigate } from "react-router-dom";
import { getOrderById, updateOrder } from "../data/fakeApi";
import { useState, useEffect } from "react";
import { cars } from "../data/cars";
import "./basket.css";

export default function UpdateOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const orderData = getOrderById(Number(id));

  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (orderData) {
      setName(orderData.name);
      setCar(orderData.car);
      setQuantity(orderData.quantity);
    }
  }, [orderData]);

  if (!orderData) return <h2>Order not found</h2>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOrder({ id: Number(id), name, car, quantity });
    navigate("/basket");
  };

  return (
    <div className="basket-container">
      <h1>Update Order</h1>
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

        <button type="submit">Update Order</button>
      </form>
    </div>
  );
}
