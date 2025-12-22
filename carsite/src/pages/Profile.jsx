import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <p><b>First Name:</b> {user.firstName}</p>
        <p><b>Last Name:</b> {user.lastName}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
      </div>
      <button className="profile-btn" onClick={logout}>Logout</button>
    </div>
  );
}
