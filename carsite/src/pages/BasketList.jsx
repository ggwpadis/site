import { Link } from "react-router-dom";
import "./basket.css";

export default function BasketList() {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedBasket = basket.filter((item) => item.id !== id);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      window.location.reload(); // оставляем reload, как было
    }
  };

  const totalPrice = basket.reduce((sum, item) => {
    const priceNum = Number(item.price.replace(/[^0-9]/g, ""));
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <div className="basket-container">
      <h1>Your Basket</h1>

      {basket.length === 0 ? (
        <p>
          No items in basket yet. <Link to="/models">Go shopping</Link>
        </p>
      ) : (
        <>
          {/* Контейнер для карточек */}
          <div className="basket-cards">
            {basket.map((item) => (
              <div key={item.id} className="basket-card">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "400px", height: "auto" }}
                />
                <div>
                  <p><b>{item.name}</b></p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Total: $
                    {Number(item.price.replace(/[^0-9]/g, "")) * item.quantity}
                  </p>
                </div>
                <div className="basket-actions">
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <h3>Total: ${totalPrice.toLocaleString()}</h3>
          </div>
        </>
      )}

      <div className="btn-wrapper">
        <Link className="btn" to="/models">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}