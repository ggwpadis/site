import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Регистрация успешна!");
    navigate("/login");
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <h1>Регистрация</h1>

      <input name="firstName" placeholder="Имя" onChange={handleChange} required />
      <input name="lastName" placeholder="Фамилия" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Телефон" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Пароль" onChange={handleChange} required />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Повторите пароль"
        onChange={handleChange}
        required
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
