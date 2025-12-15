const STORAGE_KEY = "orders";

export const getOrders = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const getOrderById = (id) => {
  return getOrders().find(order => order.id === id);
};

export const createOrder = (order) => {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
};

export const updateOrder = (updatedOrder) => {
  const orders = getOrders().map(order =>
    order.id === updatedOrder.id ? updatedOrder : order
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
};

export const deleteOrder = (id) => {
  const orders = getOrders().filter(order => order.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
};
