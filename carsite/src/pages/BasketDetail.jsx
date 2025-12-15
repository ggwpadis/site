import { useParams, Link } from "react-router-dom";
import { getOrderById } from "../data/fakeApi";
import "./basket.css";

export default function BasketDetail() {
  const { id } = useParams();
  const order = getOrderById(Number(id));

  if (!order) return <h2>Order not found</h2>;

  return (
    <div className="basket-container">
      <h1>Order Detail</h1>
      <div className="basket-card">
        <p><b>Name:</b> {order.name}</p>
        <p><b>Car:</b> {order.car}</p>
        <p><b>Quantity:</b> {order.quantity}</p>
      </div>
      <Link className="btn" to="/basket">Back</Link>
    </div>
  );
}
