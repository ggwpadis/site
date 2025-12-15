import { Link } from "react-router-dom";
import { getOrders, deleteOrder } from "../data/fakeApi";
import "./basket.css";

export default function BasketList() {
  const orders = getOrders();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      deleteOrder(id);
      window.location.reload(); 
    }
  };

  return (
    <div className="basket-container">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet. <Link to="/create-order">Create one</Link></p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="basket-card">
            <p><b>Name:</b> {order.name}</p>
            <p><b>Car:</b> {order.car}</p>
            <p><b>Quantity:</b> {order.quantity}</p>
            <div className="basket-actions">
              <Link to={`/basket/${order.id}`}>Details</Link>
              <Link to={`/update-order/${order.id}`}>Edit</Link>
              <button onClick={() => handleDelete(order.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
      <Link className="btn" to="/create-order">Create New Order</Link>
    </div>
  );
}
